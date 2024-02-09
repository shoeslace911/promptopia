"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const PromptCard = ({ key, post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <Image
          src={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
      </div>
    </div>
  );
};

export default PromptCard;
