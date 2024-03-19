import React, { useState } from "react";
import useFetch from "../useFetch";
import { IoMdArrowDropdown } from "react-icons/io";
import './comments.css'

const Comments = (props) => {
  const commentsURL = `https://jsonplaceholder.typicode.com/comments/?postId=${props.id}`;
  const [data] = useFetch(commentsURL);
  const [show, setshow] = useState(false);
  const [rotate, setrotate] = useState(false);
  const handleComments = () => {
    setshow(!show);
    setrotate(!rotate)
    // console.log(show);
  };
  return (
    <div>
      <h4 className="comments-container" >
        Comments <IoMdArrowDropdown onClick={handleComments} className={rotate?'normal':'rotate'} />
      </h4>
      {data &&
        data.map((el) => (
          <div className={show?'display':'hide'} key={el.id}>
            <h5>
              {el.email} : <p className="comment-body">{el.body}</p>
            </h5>
          </div>
        ))}
    </div>
  );
};

export default Comments;
