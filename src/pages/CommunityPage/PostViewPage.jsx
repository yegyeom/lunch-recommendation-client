import React from "react";
import { useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import API from "../../api";

const PostViewPage = () => {
  const isLogin = useContext(AuthContext);
  const { state } = useLocation();
  const [postInfo, setPostInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [editDate, setEditDate] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    (async function () {
      const data = await API.community.getPost({ id: state[0] });
      if (data) {
        setPostInfo(data);
        setComments(data.comments);

        const arr1 = data.created_at.split("T");
        const arr2 = arr1[1].split(".");
        setEditDate(arr1[0] + " " + arr2[0]);
      }
    })();
  }, []);

  const EditDateList = comments.map((item) => {
    const arr1 = item.created_at.split("T");
    const arr2 = arr1[1].split(".");

    return arr1[0] + " " + arr2[0];
  });

  const commentList = comments.map((item, idx) => (
    <div className="comment" key={idx}>
      <div className="comment-info">
        <span>{item.nickname}</span>&nbsp;
        {EditDateList[idx]}
      </div>
      <div className="comment-content">{item.content}</div>
    </div>
  ));

  const handleCommentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCommentBtnClick = async () => {
    const data = await API.community.createComment({
      post_id: state[0],
      content,
    });

    if (data) {
      setComments([...comments, data]);

      const el = document.getElementsByClassName("new-comment");
      el[0].value = "";
    }
  };

  return (
    <div className="community">
      <div className="view-post">
        <div className="view-post-title">
          <span>[{state[1]}]</span>&nbsp;
          {postInfo.title}
        </div>
        <div className="view-post-content">{postInfo.content}</div>
      </div>
      <div className="view-post-info">
        {postInfo.nickname}&nbsp;&nbsp;{editDate}
      </div>
      <div className="comment-list">{commentList}</div>
      {isLogin.isLogin && (
        <>
          <textarea
            type="text"
            className="new-comment"
            onChange={handleCommentChange}
            placeholder="내용을 입력해주세요."
          />
          {content.length > 0 ? (
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
    </div>
  );
};

export default PostViewPage;
