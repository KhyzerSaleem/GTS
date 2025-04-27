// app/api/posts/route.js
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET() {
  try {
    console.log("Fetching all posts...");
    await connectToDB();
    const posts = await Post.find({}).sort({ createdAt: -1 });
    console.log(`Found ${posts.length} posts`);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: error.message || "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const postData = await request.json();
    console.log("Creating new post:", postData);
    await connectToDB();
    const newPost = await Post.create(postData);
    console.log("Post created:", newPost);
    return NextResponse.json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { message: error.message || "Failed to create post" },
      { status: 500 }
    );
  }
}
