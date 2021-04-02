import React from "react";
import "./styles.scss";

// recursion to handle the infinite nested comments
const showReply = (comment) => {
  //check if replies present or not
  const recursiveFunction = (reply) => {
    /**if there is there is comment inside Replies array */
    if (reply.replies.length > 0) {
      return (
        <>
          <ul className="replies">
            <li className="comment"> {reply.comment}</li>
            <li className="user"> {reply.user.name}</li>
          </ul>

          {reply.replies.map((nested) => {
            return (
              <ul>
                <li>{showReply(nested)}</li>
              </ul>
            );
          })}
        </>
      );
    } else {
      return (
        <ul className="replies">
          <li className="comment"> {reply.comment}</li>
          <li className="user"> {reply.user.name}</li>
        </ul>
      );
    }
  };
  return <div className="replies">{recursiveFunction(comment)}</div>;
};
export default showReply;