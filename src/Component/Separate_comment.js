import React, { useState } from 'react'
import Reply_comment from './Reply_comment';

function Separate_comment(props) {
    const [like,setLike]=useState(0);
    const [dislike,setDisLike]=useState(0);

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [reply,setReply]=useState(false);
    function likef(){
        setLike(like+1);
    }
    function dislikef(){
        setDisLike(dislike+1);
    }
    function Reply_comment_func(){
          setReply(true);
    }
    const onClickHandler = () => {
        if(comment.length!==0){
        setComments((comments) => [...comments, comment]);
        }
    };
  return (
    <div>
    <div className="comment-container" style={{padding:"10px"}}>{props.text}</div>
    <button className="like-btn" onClick={likef}>Like {like}</button>
    <button className="like-btn" onClick={dislikef}>disLike {dislike}</button>
    <button className='like-btn' onClick={Reply_comment_func}>Replies</button>
    {reply==true ? <div>
        <input type="text" placeholder='type your reply here' style={{marginTop:"20px",padding:"10px", borderRadius:"10px"}} value={comment} onChange={(e)=>setComment(e.target.value)} />
        <input type="submit" style={{padding:"10px 22px",borderRadius:"10px"}} onClick={onClickHandler} />
        {comments.map((text) => (
          <Reply_comment text={comment}/>
      ))}
    </div> : <h1></h1>
    
    }
    </div>

  )
}

export default Separate_comment
