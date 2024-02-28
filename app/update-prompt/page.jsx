"use client";

import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdatePrompt = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  // search for likely params
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt not found!");
    try {
      //post whatever is in the text post to the api we's gonna create called "prompt from inside the api folder"
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const getPromptDetails = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = await res.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);
  return (
    <div>
      <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt} />
    </div>
  );
};

export default UpdatePrompt;
