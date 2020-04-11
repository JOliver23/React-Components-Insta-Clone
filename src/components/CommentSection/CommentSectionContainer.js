// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  //const [comList, updateFeed] = useState();

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {/* {comList.map((commentObj, index) => {
        return <Comment key={index} post={commentObj} />;
      })} */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
