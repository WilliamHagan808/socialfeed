
import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts';
import NavBar from './Components/NavBar';
import CreatePost from './Components/CreatePost';
function App() {
  const [posts, setPosts] = useState([
    { name: "Matthew Bshero", comment: "Test post 1" },
    { name: "Matthew Bshero", comment: "Test post 2" },
  ]);

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <main>
      <CreatePost />
      <CreatePost addNewPostProp={addNewPost}/>
      <DisplayPosts post={posts}/>
      </main>
    </div>
  );
}
export default App;