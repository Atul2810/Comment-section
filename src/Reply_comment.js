import React from 'react'
import { useState } from 'react';
function Reply_comment(props) {
    const [like,setLike]=useState(0);
    const [dislike,setDisLike]=useState(0);

    function likef(){
        setLike(like+1);
    }
    function dislikef(){
        setDisLike(dislike+1);
    }

  return (
    <div>
    <div className="comment-container" style={{marginLeft:"20px"}}>{props.text}</div>
    <button className="like-btn" onClick={likef}>Like {like}</button>
    <button className="like-btn" onClick={dislikef}>disLike {dislike}</button>
    </div>
  )
}

export default Reply_comment
