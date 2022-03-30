
import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import NavBar from "./components/NavBar/NavBar";
import CreatePost from "./components/CreatePost/CreatePost";
function App() {
 
    const [posts, setPosts] = useState([
    { name: "William", comment: "Test post 1" },
    { name: "William", comment: "Test post 2" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post,... posts];
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