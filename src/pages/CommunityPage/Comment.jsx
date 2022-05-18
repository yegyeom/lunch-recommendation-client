import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";

const Comment = () => {
  const isLogin = useContext(AuthContext);
  const [comment, setComment] = useState("");

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

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentBtnClick = () => {};

  return (
    <>
      <div className="comment-list">{commentList}</div>
      {isLogin.isLogin && (
        <>
          <textarea
            type="text"
            className="new-comment"
            onChange={handleCommentChange}
            placeholder="내용을 입력해주세요."
          />
          {comment.length > 0 ? (
            <button
              className="new-comment-active-btn"
              onClick={handleCommentBtnClick}
            >
              등록
            </button>
          ) : (
            <button className="new-comment-nonactive-btn"> 등록 </button>
          )}
        </>
      )}
    </>
  );
};

export default Comment;
