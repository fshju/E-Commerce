"use client";

import React, { useState } from "react";
import Link from "next/link";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Details saved successfully!");
    console.log("Saved Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Navigation */}
        <nav className="flex justify-between items-center text-sm text-gray-500 mb-6">
            
          <Link href="/">Home / <span className="text-red-500">My Account</span></Link>
          <div className="text-lg text-red-500 font-semibold">
            Welcome! {formData.firstName} {formData.lastName}
          </div>
        </nav>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-4">Manage My Account</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-red-500 font-medium">
                  My Profile
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-600 hover:text-red-500">
                  Address Book
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-600 hover:text-red-500">
                  My Payment Options
                </a>
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-4">My Orders</h3>
            <ul className="space-y-3">
              <li>
                <a className="cursor-pointer text-gray-600 hover:text-red-500">
                  My Returns
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-600 hover:text-red-500">
                  My Cancellations
                </a>
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h3>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-red-500">
              Edit Your Profile
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Password Changes
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      value={formData.confirmNewPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;