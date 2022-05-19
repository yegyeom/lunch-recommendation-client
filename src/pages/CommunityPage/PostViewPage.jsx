import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import API from "../../api";

const PostViewPage = () => {
  const navigate = useNavigate();
  const { isLogin, user } = useContext(AuthContext);
  const { state } = useLocation();
  const [postInfo, setPostInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [editDate, setEditDate] = useState("");
  const [content, setContent] = useState("");
  const [deleteComment, setDeleteComment] = useState(false);

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

  useEffect(() => {
    (async function () {
      const data = await API.community.getPost({ id: state[0] });
      if (data) setComments(data.comments);
      setDeleteComment(false);
    })();
  }, [deleteComment]);

  const EditDateList = comments.map((item) => {
    const arr1 = item.created_at.split("T");
    const arr2 = arr1[1].split(".");

    return arr1[0] + " " + arr2[0];
  });

  const handleModifyBtnClick = () => {
    console.log("modify");
  };

  const handleDeleteBtnClick = async (value, id) => {
    const data =
      value === "post"
        ? await API.community.deletePost({
            id,
          })
        : await API.community.deleteComment({
            id,
          });

    if (data) console.log(data);
    value === "post" ? navigate("/community/posts") : setDeleteComment(true);
  };

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

  const commentList = comments.map((item, idx) => (
    <div className="comment" key={idx}>
      <div className="comment-info">
        <div>
          <span>{item.nickname}</span>&nbsp;
          {EditDateList[idx]}
        </div>
        <div>
          {user.pk === postInfo.user_id && (
            <>
              <button
                onClick={() => handleModifyBtnClick("comment", item.comment_id)}
              >
                수정
              </button>
              <button
                onClick={() => handleDeleteBtnClick("comment", item.comment_id)}
              >
                삭제
              </button>
            </>
          )}
        </div>
      </div>
      <div className="comment-content">{item.content}</div>
    </div>
  ));

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
        {user.pk === postInfo.user_id && (
          <>
            <button onClick={() => handleModifyBtnClick("post", state[0])}>
              수정
            </button>
            <button onClick={() => handleDeleteBtnClick("post", state[0])}>
              삭제
            </button>
          </>
        )}
      </div>
      <div className="comment-list">{commentList}</div>
      {isLogin && (
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
