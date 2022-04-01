
import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import NavBar from "./components/NavBar/NavBar";
import CreatePost from "./components/CreatePost/CreatePost";
import "./App.css";
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="border-nav">
            <NavBar />
          </div>
        </div>
      </div>
      <main>  
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="border-box">
              <CreatePost addNewPostProp={addNewPost} />
            </div>
            <div className="border-box">
              <DisplayPosts post={posts} />
            </div>
          </div>
          </div>
          </main>
        </div>
        );
        }
export default App;