import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import Comment from "./Comment";

const PostViewPage = () => {
  const { state } = useLocation();
  const user = useContext(AuthContext);

  return (
    <div className="community">
      <div className="view-post">
        <div className="view-post-title">
          <span>[{state.category}]</span>&nbsp;
          {state.title}
        </div>
        <div className="view-post-content">{state.content}</div>
      </div>
      <div className="view-post-info">
        {state.nickname}&nbsp;&nbsp;2022-05-18 09:52
      </div>
      <Comment />
    </div>
  );
};

export default PostViewPage;
