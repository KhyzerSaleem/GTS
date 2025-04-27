// src/app/posts/[id]/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlogStore } from "../../../services/blogService";

export default function PostDetail({ params }) {
  const router = useRouter();
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const postId = unwrappedParams.id;

  const { getPost, isLoading, error } = useBlogStore();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPost(postId);
        setPost(fetchedPost);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId, getPost]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-gray-50">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="animate-spin h-10 w-10 text-green-600 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
          <p className="text-lg text-gray-700 font-medium">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-green-900">GTS</div>
          <div className="text-gray-600">Blog</div>
        </div>
        <button
          onClick={() => router.push("/blog")}
          className="text-green-600 hover:text-green-800"
        >
          Back to Posts
        </button>
      </header>

      {/* Post Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-green-900 mb-4">{post.title}</h1>

        <div className="flex items-center text-sm text-gray-600 mb-6 space-x-4">
          <div>{new Date(post.date).toLocaleDateString()}</div>
          <div>By {post.author}</div>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <div className="prose max-w-none">
          {/* Format the content with proper paragraphs */}
          {post.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
