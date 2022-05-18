import Category from "./Category";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import API from "../../api";
import { getAllCategoryItems } from "../../utils/allCategoryItems";

function PostList() {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const getCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    (async function () {
      const data = await API.community.getPosts();
      if (data) {
        console.log(data);
      }
    })();
  }, []);

  const categoryItems = getAllCategoryItems();

  const postItems = [
    // 댓글 수, 이미지 정보 필요함
    {
      index: 0,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "질문",
      category_id: 1,
      title: "강남역 초밥 맛집 아시는 분?",
      content: "내용 1",
      date: "2022-05-06 16:13",
    },
    {
      index: 1,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "추천",
      category_id: 2,
      title: "신논현역 삼겹살 맛집 추천합니다!!!!!!",
      content: "내용 2",
      date: "2022-05-06 16:13",
    },
    {
      index: 2,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "질문",
      category_id: 1,
      title: "상도동 어쩌구어쩌구 지금 가면 웨이팅 각?",
      content: "내용 3",
      date: "2022-05-06 16:13",
    },
    {
      index: 3,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "자유",
      category_id: 3,
      title: "ㅇㅇ식당 오늘 휴무네요 참고하세요~",
      content: "내용 4",
      date: "2022-05-06 16:13",
    },
    {
      index: 4,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "질문",
      category_id: 1,
      title: "강남역 초밥 맛집 아시는 분?",
      content: "내용 1",
      date: "2022-05-06 16:13",
    },
    {
      index: 5,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "추천",
      category_id: 2,
      title: "신논현역 삼겹살 맛집 추천합니다!!!!!!",
      content: "내용 2",
      date: "2022-05-06 16:13",
    },
    {
      index: 6,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "질문",
      category_id: 1,
      title: "상도동 어쩌구어쩌구 지금 가면 웨이팅 각?",
      content: "내용 3",
      date: "2022-05-06 16:13",
    },
    {
      index: 7,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "자유",
      category_id: 3,
      title: "ㅇㅇ식당 오늘 휴무네요 참고하세요~",
      content: "내용 4",
      date: "2022-05-06 16:13",
    },
    {
      index: 8,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "질문",
      category_id: 1,
      title: "강남역 초밥 맛집 아시는 분?",
      content: "내용 1",
      date: "2022-05-06 16:13",
    },
    {
      index: 9,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "추천",
      category_id: 2,
      title: "신논현역 삼겹살 맛집 추천합니다!!!!!!",
      content: "내용 2",
      date: "2022-05-06 16:13",
    },
    {
      index: 10,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "질문",
      category_id: 1,
      title: "상도동 어쩌구어쩌구 지금 가면 웨이팅 각?",
      content: "내용 3",
      date: "2022-05-06 16:13",
    },
    {
      index: 11,
      user_id: "testuser",
      nickname: "yegyeom",
      category: "자유",
      category_id: 3,
      title: "ㅇㅇ식당 오늘 휴무네요 참고하세요~",
      content: "내용 4",
      date: "2022-05-06 16:13",
    },
  ];

  const handlePostClick = (info) => {
    console.log(info);
    navigate(`/community/posts/${info.index}`, { state: info });
  };

  const postList = postItems.map(
    (item, idx) =>
      (item.category === category || category === "전체") && (
        <Fragment key={idx}>
          <div className="post-list-item">
            <div>{item.category}</div>
            <div className="post-info">
              <span onClick={() => handlePostClick(item)}>{item.title}</span>
              <div className="post-detail-info">
                <span>{item.nickname}</span>
                &nbsp;
                <span>{item.date}</span>
              </div>
            </div>
          </div>
          <hr />
        </Fragment>
      )
  );

  return (
    <>
      <Category
        getCategory={getCategory}
        categoryItems={categoryItems}
      ></Category>
      {postList}
    </>
  );
}

export default PostList;
