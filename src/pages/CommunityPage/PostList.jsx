import Category from "./Category";
import { useState } from "react";

function PostList() {
  const [category, setCategory] = useState("");

  const getCategory = (category) => {
    setCategory(category);
  };

  const categoryItems = [
    { title: "전체", id: "all" },
    { title: "질문", id: "question" },
    { title: "추천", id: "recommendation" },
    { title: "자유", id: "free" },
  ];

  const postItems = [
    // 댓글 정보, 이미지 정보 필요함
    {
      index: 0,
      id: "yegyeom",
      category: "질문",
      title: "제목 1",
      content: "내용 1",
      date: "2022-05-06 16:13",
    },
    {
      index: 1,
      id: "yegyeom",
      category: "추천",
      title: "제목 2",
      content: "내용 2",
      date: "2022-05-06 16:13",
    },
    {
      index: 2,
      id: "yegyeom",
      category: "질문",
      title: "제목 3",
      content: "내용 3",
      date: "2022-05-06 16:13",
    },
    {
      index: 3,
      id: "yegyeom",
      category: "자유",
      title: "제목 4",
      content: "내용 4",
      date: "2022-05-06 16:13",
    },
  ];

  const postList = postItems.map(
    (item, idx) => item.category === category && <div>{item.index}</div>
  );

  const allPostList = postItems.map((item, idx) => <div>{item.index}</div>);

  return (
    <>
      <Category
        getCategory={getCategory}
        categoryItems={categoryItems}
      ></Category>
      {category === "전체" ? allPostList : postList}
    </>
  );
}

export default PostList;
