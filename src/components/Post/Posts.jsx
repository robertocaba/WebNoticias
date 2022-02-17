import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './Posts.css'
const Posts = () => {
  const { posts, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  const post = posts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <h1>{post.name}</h1>
        <img src={post.image} />
      </div>
    );
  });
  return <div className="posts">{post}</div>;
};

export default Posts;