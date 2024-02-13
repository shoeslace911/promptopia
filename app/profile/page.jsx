"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const handleEdit = () => {};
const handleDelete = async () => {};

export default function MyProfile() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  console.log(session?.user.id);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
    console.log(fetchPosts());
  }, [session?.user.id]);
  {
  }
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
