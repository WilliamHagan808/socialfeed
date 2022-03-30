import React, { useState } from 'react';
import Post from "../PostFolder/Post";
import './DisplayPosts.css'


const DisplayPosts = (props) => {
  return (
    <table className='table'>
      <thead className='thread-dark'>
        <tr>
          <th>Social Feed</th>
        </tr>
      </thead>
      <tbody>
              {props.post.map((post, index) => {
        return (
            <tr key={index}>
            <Post post={post} />
            </tr>
        );
      })
    }
      </tbody>
    </table>
  );
};
export default DisplayPosts;