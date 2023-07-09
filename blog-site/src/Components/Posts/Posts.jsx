import React from 'react';
import "./Posts.css"
import Post from '../Post/Post';
export default function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.map((p,q) => (
        <Post key={q}post={p} />
      ))}
    
    </div>
  );
}
