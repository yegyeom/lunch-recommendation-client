import Category from "./Category";
import { useState } from "react";
import { getCategoryItems } from "../../utils/categoryItems.js";

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

  const categoryItems = getCategoryItems();

  return (
    <div className="community">
      <Category
        getCategory={getCategory}
        categoryItems={categoryItems}
        postCategory={category}
        postTitle={title}
        postContent={content}
      ></Category>
      <form className="new-post">
        <input
          type="text"
          className="new-post-title"
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요. (2자 이상)"
        />
        <textarea
          type="text"
          className="new-post-content"
          onChange={handleContentChange}
          placeholder="내용을 입력하세요. (5자 이상)"
        />
      </form>
    </div>
  );
};

export default NewPostPage;
