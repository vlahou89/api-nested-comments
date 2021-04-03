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
          {/*list the main comments and user name*/}
          <ul className="replies">
            <li className="comment"> {reply.comment}</li>
            <li className="user"> {reply.user.name}</li>
          </ul>

          {/**if there is a reply, map through replies and show nested comments*/}
          {reply.replies.map((comment) => {
            return (
              <ul className="nestedReplies">
                <li>{showReply(comment)}</li>
              </ul>
            );
          })}
        </>
      );
    } else {
      /**Else show the main comments*/
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
