import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";

const PostViewPage = () => {
  const { state } = useLocation();
  const user = useContext(AuthContext);

  const comments = [
    {
      nickname: "yegyeom",
      content:
        "댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 ",
      created_at: "2019-08-24T14:15:22Z",
    },
    {
      nickname: "yegyeom",
      content:
        "댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 ",
      created_at: "2019-08-24T14:15:22Z",
    },
    {
      nickname: "yegyeom",
      content:
        "댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 ",
      created_at: "2019-08-24T14:15:22Z",
    },
    {
      nickname: "yegyeom",
      content:
        "댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 ",
      created_at: "2019-08-24T14:15:22Z",
    },
  ];

  const commentList = comments.map((item, idx) => (
    <div className="comment" key={idx}>
      <div className="comment-info">
        <span>{item.nickname}</span>&nbsp;
        {item.created_at}
      </div>
      <div className="comment-content">{item.content}</div>
    </div>
  ));

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
      <div className="comment-list">{commentList}</div>
    </div>
  );
};

export default PostViewPage;
