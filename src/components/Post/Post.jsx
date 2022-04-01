
import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {
const [likeactive, setLikeactive] = useState(false);
const [dislikeactive, setDislikeactive] = useState(false);
const today = new Date();

function likef(){
  if (likeactive){
    setLikeactive(false)
  } else{
    setLikeactive(true)
    if(dislikeactive){
      setDislikeactive(false)
    }
  }
}
function dislikef(){
  if (dislikeactive){
    setDislikeactive(false)
  } else{
    setDislikeactive(true)
    if(likeactive){
      setLikeactive(false)
    }
  }
}

  return (
    <td>
    <div>
      <h3 className="col">{props.post.name}</h3>
      <p className="col">{props.post.comment}</p>
      <div>
      <button className={[likeactive ? 'like': null, '' ].join('')} onClick={likef} >

      </button>
      <button className={[dislikeactive ? 'dislike': null, '' ].join('')} onClick={dislikef}>
  
      </button>
      </div>
    </div>
  </td>
);
};

export default Post;