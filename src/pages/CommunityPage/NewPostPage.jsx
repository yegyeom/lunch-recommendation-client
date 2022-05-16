import Category from "./Category";
import { useState } from "react";

const NewPostPage = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getCategory = (category) => {
    setCategory(category);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const categoryItems = [
    { index: 0, title: "질문", id: "question" },
    { index: 1, title: "추천", id: "recommendation" },
    { index: 2, title: "자유", id: "free" },
  ];

  return (
    <div className="community">
      <Category
        getCategory={getCategory}
        categoryItems={categoryItems}
        title={false}
      ></Category>
      <form className="new-post">
        <input
          type="text"
          className="new-post-title"
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요."
        />
        <textarea
          type="text"
          className="new-post-content"
          onChange={handleContentChange}
          placeholder="내용을 입력하세요."
        />
      </form>
    </div>
  );
};

export default NewPostPage;
