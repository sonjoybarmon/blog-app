import React from "react";

const SinglePost = ({ post }) => {
  console.log(post);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths: paths || [],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post);

  return {
    props: {
      post: post,
    },
  };
};

export default SinglePost;
