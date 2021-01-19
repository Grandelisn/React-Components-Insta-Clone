import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = props => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { post, likePost } = props;
  console.log('Posts.js ' + likePost);

  return (
    <div className='posts-container-wrapper'>
      {post.map(obj => { return (<Post post ={obj} likePost = {likePost} />)})}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
