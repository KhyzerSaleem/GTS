// services/blogService.js
import { create } from "zustand";

export const useBlogStore = create((set, get) => ({
  posts: [],
  currentPost: null, // Add this to store the current post
  isLoading: false,
  error: null,

  // Fetch all posts
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      set({ posts: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching posts:", error);
      set({ error: error.message, isLoading: false });
    }
  },

  // Get a single post
  getPost: async (postId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`/api/posts/${postId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch post");
      }
      const post = await response.json();
      set({ currentPost: post, isLoading: false });
      return post;
    } catch (error) {
      console.error("Error getting post:", error);
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  // Add new post
  addPost: async (postData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add post");
      }

      const newPost = await response.json();
      set((state) => ({
        posts: [...state.posts, newPost],
        isLoading: false,
      }));

      return newPost;
    } catch (error) {
      console.error("Error adding post:", error);
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  // Update existing post
  updatePost: async (postId, postData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update post");
      }

      const updatedPost = await response.json();
      set((state) => ({
        posts: state.posts.map((post) =>
          post._id === updatedPost._id ? updatedPost : post
        ),
        isLoading: false,
      }));

      return updatedPost;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  // Delete post
  deletePost: async (postId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete post");
      }

      set((state) => ({
        posts: state.posts.filter((post) => post._id !== postId),
        isLoading: false,
      }));

      return true;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));
