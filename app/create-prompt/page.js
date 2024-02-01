"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {};
  return (
    <div>
      <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />
    </div>
  );
};

export default CreatePrompt;
