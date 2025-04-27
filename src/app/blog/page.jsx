// src/app/posts/page.jsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBlogStore } from "../../services/blogService";

export default function Posts() {
  const router = useRouter();
  const { posts, isLoading, error, fetchPosts } = useBlogStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Filter to only show published posts
  const publishedPosts = posts.filter((post) => post.status === "Published");

  const viewPost = (postId) => {
    router.push(`/blog/${postId}`);
  };

  if (isLoading && posts.length === 0) {
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

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-green-900">GTS</div>
          <div className="text-gray-600">Posts Page</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          All Blog Posts
        </h1>

        {publishedPosts.length === 0 ? (
          <div className="text-center py-10">
            <div className="text-gray-600">No published posts available.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedPosts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col"
                onClick={() => viewPost(post._id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-green-900">
                    {post.title}
                  </h2>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                    {post.status}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                  <div>{new Date(post.createdAt).toLocaleDateString()}</div>
                  <div>By {post.author}</div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
                  {post.content}
                </p>

                <div className="text-green-600 text-sm font-medium mt-auto">
                  Read more →
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
