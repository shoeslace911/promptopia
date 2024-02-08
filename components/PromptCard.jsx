import React from "react";

const PromptCard = ({ key, post, handleTagClick }) => {
  return (
    <div>
      {console.log("Prompt Card", post)}
      {post.map((data) => (
        <h1>{data.prompt}</h1>
      ))}
    </div>
  );
};

export default PromptCard;
