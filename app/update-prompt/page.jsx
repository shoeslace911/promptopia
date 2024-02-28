"use client";

import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdatePrompt = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  // search for likely params
  console.log(post);
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  // const createPrompt = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);

  //   try {
  //     //post whatever is in the text post to the api we's gonna create called "prompt from inside the api folder"
  //     const res = await fetch("/api/prompt/new", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         prompt: post.prompt,
  //         userId: session?.user.id,
  //         tag: post.tag,
  //       }),
  //     });
  //     if (res.ok) {
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  useEffect(() => {
    const getPromptDetails = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      console.log("respoins", res);
      const data = await res.json();
      console.log("data", data);
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    getPromptDetails();
  }, [promptId]);
  return (
    <div>
      <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={() => {}} />
    </div>
  );
};

export default UpdatePrompt;
