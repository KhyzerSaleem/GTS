// app/api/posts/[id]/route.js
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET(request, { params }) {
  try {
    // Properly unwrap params
    const id = params.id;
    console.log(`Fetching post with ID: ${id}`);
    await connectToDB();

    const post = await Post.findById(id);

    if (!post) {
      console.log(`Post not found: ${id}`);
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    console.log("Post found:", post);
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching post:`, error);
    return NextResponse.json(
      { message: error.message || "Failed to fetch post" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const id = params.id;
    const postData = await request.json();

    await connectToDB();

    const updatedPost = await Post.findByIdAndUpdate(id, postData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    await connectToDB();

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to delete post" },
      { status: 500 }
    );
  }
}
