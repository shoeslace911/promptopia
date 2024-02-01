import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span>{type} post</span>
      </h1>
    </section>
  );
};

// how making the form, passing the props

export default Form;
