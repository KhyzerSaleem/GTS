"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBlogStore } from "../../services/blogService";
import { signOut } from "next-auth/react";

export default function BlogAdmin() {
  const router = useRouter();
  const {
    posts,
    isLoading,
    error,
    fetchPosts,
    addPost,
    updatePost,
    deletePost,
  } = useBlogStore();

  // State for form and UI control
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    date: new Date().toISOString().slice(0, 10),
    status: "Draft",
    author: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  // Category Management State
  const [categories, setCategories] = useState([
    "Education",
    "Events",
    "Students",
  ]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Initialize category from local storage on component mount
  useEffect(() => {
    const storedCategories = localStorage.getItem("blog-categories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
    // If categories exist but formData.category is empty, set it to the first category
    if (formData.category === "" && categories.length > 0) {
      setFormData((prev) => ({ ...prev, category: categories[0] }));
    }
  }, []);

  // Save categories to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("blog-categories", JSON.stringify(categories));
  }, [categories]);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPost) {
        // Update existing post
        await updatePost(editingPost._id, formData);
        alert("Post updated successfully!");
      } else {
        // Create new post
        await addPost(formData);
        alert("Post created successfully!");
      }
      resetForm();
    } catch (err) {
      console.error("Error saving post:", err);
      alert("Error saving post. Please try again.");
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      category: post.category,
      content: post.content,
      date: new Date(post.date).toISOString().slice(0, 10),
      status: post.status,
      author: post.author,
    });
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(id);
        alert("Post deleted successfully!");
      } catch (err) {
        console.error("Error deleting post:", err);
        alert("Error deleting post. Please try again.");
      }
    }
  };

  const resetForm = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      category: categories.length > 0 ? categories[0] : "",
      content: "",
      date: new Date().toISOString().slice(0, 10),
      status: "Draft",
      author: "",
    });
    setShowForm(false);
  };

  // Category Management Functions
  const handleAddCategory = () => {
    if (categoryInput.trim() === "") return;

    if (editingCategory !== null) {
      // Update existing category
      const updatedCategories = [...categories];
      updatedCategories[editingCategory] = categoryInput;
      setCategories(updatedCategories);

      // Update posts with the old category name
      const oldCategoryName = categories[editingCategory];
      posts.forEach((post) => {
        if (post.category === oldCategoryName) {
          updatePost(post._id, { ...post, category: categoryInput });
        }
      });
    } else {
      // Add new category
      setCategories([...categories, categoryInput]);
    }

    setCategoryInput("");
    setEditingCategory(null);
    setShowCategoryModal(false);
  };

  const handleEditCategory = (index) => {
    setCategoryInput(categories[index]);
    setEditingCategory(index);
    setShowCategoryModal(true);
  };

  const handleDeleteCategory = (index) => {
    const categoryToDelete = categories[index];
    if (
      window.confirm(
        `Are you sure you want to delete category "${categoryToDelete}"? This will remove the category from all posts using it.`
      )
    ) {
      const updatedCategories = categories.filter((_, i) => i !== index);
      setCategories(updatedCategories);

      // Update posts with the deleted category
      posts.forEach((post) => {
        if (post.category === categoryToDelete) {
          // Set to first available category or empty string
          const newCategory =
            updatedCategories.length > 0 ? updatedCategories[0] : "";
          updatePost(post._id, { ...post, category: newCategory });
        }
      });

      // Update formData if it was using the deleted category
      if (formData.category === categoryToDelete) {
        setFormData({
          ...formData,
          category: updatedCategories.length > 0 ? updatedCategories[0] : "",
        });
      }
    }
  };

  // Filter and search posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const viewPost = (postId) => {
    router.push(`/blog/${postId}`);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2 sm:p-4 md:p-6">
      {/* Header with logo and navigation */}
      <header className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4 mb-3 sm:mb-0">
            <div className="text-xl sm:text-2xl font-bold text-green-950">
              GTS
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Admin Panel
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:hidden bg-gray-100 p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex space-x-4">
            <Link href="/blog" className="text-green-600 hover:text-green-900">
              Posts
            </Link>
            <Link href="/admin" className="text-green-600 hover:text-green-900">
              Settings
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="sm:hidden mt-3 pt-3 border-t">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/posts"
                  className="block py-2 text-green-600 hover:text-green-900"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="block py-2text-green-600 hover:text-green-900"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Sidebar - Mobile Collapsible, Desktop Fixed */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4 sm:mb-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3 sm:mb-4">
              Quick Actions
            </h3>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full bg-[#0c3458]  md:hidden hover:bg-green-700 text-white py-2 px-4 rounded mb-3 flex items-center justify-center"
            >
              Sign Out
            </button>
            <br className="block md:hidden" />
            <Link
              href="/HomeHeroSettings"
              className="w-full  md:hidden bg-green-600 hover:bg-green-900 text-white py-2 px-4 rounded mb-3 flex items-center justify-center"
            >
              HomeSettings
            </Link>
            <br className="block lg:hidden" />
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-3 flex items-center justify-center"
            >
              <span>{showForm ? "Cancel" : "Create New Post"}</span>
            </button>
            <div className="space-y-2">
              <button
                onClick={() => setFilterStatus("All")}
                className={`w-full text-left px-3 sm:px-4 py-2 text-green-900 hover:bg-gray-100 rounded flex items-center ${
                  filterStatus === "All" ? "bg-gray-100" : ""
                }`}
              >
                <span>All Posts ({posts.length})</span>
              </button>
              <button
                onClick={() => setFilterStatus("Published")}
                className={`w-full text-left px-3 sm:px-4 py-2 text-green-900 hover:bg-gray-100 rounded flex items-center ${
                  filterStatus === "Published" ? "bg-gray-100" : ""
                }`}
              >
                <span>
                  Published (
                  {posts.filter((p) => p.status === "Published").length})
                </span>
              </button>
              <button
                onClick={() => setFilterStatus("Draft")}
                className={`w-full text-left px-3 sm:px-4 py-2 text-green-900 hover:bg-gray-100 rounded flex items-center ${
                  filterStatus === "Draft" ? "bg-gray-100" : ""
                }`}
              >
                <span>
                  Drafts ({posts.filter((p) => p.status === "Draft").length})
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Categories Header */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                Categories
              </h3>
              <button
                onClick={() => setShowCategoryModal(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-3 flex items-center justify-center"
              >
                Manage Categories
              </button>
            </div>

            {/* Categories List */}
            <div className="space-y-2">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <span className="flex-1 text-gray-700">{category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1">
                        {posts.filter((p) => p.category === category).length}
                      </span>
                      <button
                        onClick={() => handleEditCategory(index)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-sm">
                  No categories defined
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Post form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                {editingPost ? "Edit Post" : "Create New Post"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-gray-700 mb-1"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="author"
                      className="block text-gray-700 mb-1"
                    >
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="content" className="block text-gray-700 mb-1">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="8"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="status" className="block text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Saving..."
                      : editingPost
                      ? "Update Post"
                      : "Create Post"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Search and filter bar */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 pl-10"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
              Error: {error}
            </div>
          )}

          {/* Loading state */}
          {isLoading && posts.length === 0 && (
            <div className="flex items-center justify-center h-screen w-full bg-gray-50">
              <div className="text-center">
                <div className="mb-4">
                  <svg
                    className="animate-spin h-10 w-10 text-blue-600 mx-auto"
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
                <p className="text-lg text-gray-700 font-medium">
                  Loading posts...
                </p>
              </div>
            </div>
          )}

          {/* Posts grid */}
          {!isLoading && filteredPosts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-gray-600">No posts found</div>
              <button
                onClick={() => setShowForm(true)}
                className="mt-4 bg-[#0c3458] hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Create Your First Post
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Title
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Author
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPosts.map((post) => (
                    <tr key={post._id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium text-blue-900">
                          {post.title}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-3 px-4">{post.author}</td>
                      <td className="py-3 px-4">
                        {new Date(post.date).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            post.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : post.status === "Draft"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(post)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(post._id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                          {post.status === "Published" && (
                            <button
                              onClick={() => viewPost(post._id)}
                              className="text-green-600 hover:text-green-800"
                            >
                              View
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editingCategory !== null ? "Edit Category" : "Add New Category"}
            </h3>
            <div className="mb-4">
              <input
                type="text"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Category name"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleAddCategory}
                className="bg-[#0c3458] hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                {editingCategory !== null ? "Update" : "Add"}
              </button>
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setCategoryInput("");
                  setEditingCategory(null);
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
