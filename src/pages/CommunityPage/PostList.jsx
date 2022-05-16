import Category from "./Category";
import { Fragment, useState } from "react";

function PostList() {
  const [category, setCategory] = useState("");

  const getCategory = (category) => {
    setCategory(category);
  };

  const categoryItems = [
    { index: 0, title: "전체", id: "all" },
    { index: 1, title: "질문", id: "question" },
    { index: 2, title: "추천", id: "recommendation" },
    { index: 3, title: "자유", id: "free" },
  ];

  const postItems = [
    // 댓글 수, 이미지 정보 필요함
    {
      index: 0,
      nickname: "yegyeom",
      category: "질문",
      title: "강남역 초밥 맛집 아시는 분?",
      content: "내용 1",
      date: "2022-05-06 16:13",
    },
    {
      index: 1,
      nickname: "yegyeom",
      category: "추천",
      title: "신논현역 삼겹살 맛집 추천합니다!!!!!!",
      content: "내용 2",
      date: "2022-05-06 16:13",
    },
    {
      index: 2,
      nickname: "yegyeom",
      category: "질문",
      title: "상도동 어쩌구어쩌구 지금 가면 웨이팅 각?",
      content: "내용 3",
      date: "2022-05-06 16:13",
    },
    {
      index: 3,
      nickname: "yegyeom",
      category: "자유",
      title: "ㅇㅇ식당 오늘 휴무네요 참고하세요~",
      content: "내용 4",
      date: "2022-05-06 16:13",
    },
    {
      index: 0,
      nickname: "yegyeom",
      category: "질문",
      title: "강남역 초밥 맛집 아시는 분?",
      content: "내용 1",
      date: "2022-05-06 16:13",
    },
    {
      index: 1,
      nickname: "yegyeom",
      category: "추천",
      title: "신논현역 삼겹살 맛집 추천합니다!!!!!!",
      content: "내용 2",
      date: "2022-05-06 16:13",
    },
    {
      index: 2,
      nickname: "yegyeom",
      category: "질문",
      title: "상도동 어쩌구어쩌구 지금 가면 웨이팅 각?",
      content: "내용 3",
      date: "2022-05-06 16:13",
    },
    {
      index: 3,
      nickname: "yegyeom",
      category: "자유",
      title: "ㅇㅇ식당 오늘 휴무네요 참고하세요~",
      content: "내용 4",
      date: "2022-05-06 16:13",
    },
    {
      index: 0,
      nickname: "yegyeom",
      category: "질문",
      title: "강남역 초밥 맛집 아시는 분?",
      content: "내용 1",
      date: "2022-05-06 16:13",
    },
    {
      index: 1,
      nickname: "yegyeom",
      category: "추천",
      title: "신논현역 삼겹살 맛집 추천합니다!!!!!!",
      content: "내용 2",
      date: "2022-05-06 16:13",
    },
    {
      index: 2,
      nickname: "yegyeom",
      category: "질문",
      title: "상도동 어쩌구어쩌구 지금 가면 웨이팅 각?",
      content: "내용 3",
      date: "2022-05-06 16:13",
    },
    {
      index: 3,
      nickname: "yegyeom",
      category: "자유",
      title: "ㅇㅇ식당 오늘 휴무네요 참고하세요~",
      content: "내용 4",
      date: "2022-05-06 16:13",
    },
  ];

  const postList = postItems.map(
    (item, idx) =>
      (item.category === category || category === "전체") && (
        <Fragment key={idx}>
          <div className="post-list-item">
            <div>{item.category}</div>
            <div className="post-info">
              <span>{item.title}</span>
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
        title={true}
      ></Category>
      {postList}
    </>
  );
}

export default PostList;
