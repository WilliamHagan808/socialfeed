import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import React, { useState } from 'react';
import './Post.css';

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
        <p><small>{today.toUTCString()}</small></p>
        <p><small>{today.toDateString()}</small></p>
        <div className='pull-right'>
        <button className={[likeactive ? 'btn btn-outline-success btn-lg': 'btn btn-lg' ].join('')} onClick={likef}>
        <FaThumbsUp />
        </button>
        <button className={[dislikeactive ? 'btn btn-outline-danger btn-lg': 'btn btn-lg' ].join('')} onClick={dislikef} >
        <FaThumbsDown />
        </button>
        </div>
      </div>
    </td>
  );
};

export default Post;