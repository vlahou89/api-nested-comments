import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./styles.scss";
import showReply from "../Replies/index";

function Comment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/be0609d3-6a1b-4597-8af1-101221ac99c9")
      .then((response) => {
        setComments(response.data.data);
      });
  }, []);

  return (
    <div className="main">
      {/**Check main array for the main comments */}
      {comments.map((comment) => {
        return (
          <div className="mainComments" key={comment.id}>
            <p>Comment</p>
            <ul>
              <li className="comment"> {comment.comment}</li>
              <li className="user"> {comment.user.name}</li>
            </ul>
            <p>Replies</p>
            {/**Check replies on main comments */}
            {comment.replies.map((reply) => {
              return <>{showReply(reply)}</>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
