import { useState } from "react";
import Separate_comment from "./Component/Separate_comment";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);


  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="main-container">
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
          style={{padding:"10px"}}
          placeholder="Type your comment here"
        />
        <div>
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
        </div>
      </div>
      {comments.map((text) => (
           <Separate_comment text={comment}/>
      ))}
    </div>
  );
}

export default App;
