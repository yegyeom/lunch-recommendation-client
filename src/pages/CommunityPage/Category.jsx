import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Category(props) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(props.categoryItems[0].title);

    const allTitle = document.getElementsByClassName("category");
    for (let i of allTitle) i.style = "color: #888888";

    const element = document.getElementById(props.categoryItems[0].title);
    element.style = "color: #E5DB7E";
  }, []);

  useEffect(() => {
    props.getCategory(category);
  }, [category]);

  const handleCategoryClick = (title) => {
    return () => {
      setCategory(title);

      const allTitle = document.getElementsByClassName("category");
      for (let i of allTitle) i.style = "color: #888888;";

      const element = document.getElementById(title);
      element.style = "color: #E8DE8A";
    };
  };

  const handleNewPostBtnClick = () => {
    navigate("/post");
  };

  const handlePostBtnClick = () => {
    navigate("/community");
  };

  const categoryList = props.categoryItems.map((item, idx) => (
    <div
      id={item.title}
      onClick={handleCategoryClick(item.title)}
      key={idx}
      className="category"
    >
      {item.title}
    </div>
  ));

  return (
    <div className="community-list-header">
      <div>
        <h2 className="community-category">{categoryList}</h2>
        {props.title ? (
          <button className="new-post-btn" onClick={handleNewPostBtnClick}>
            글 작성
          </button>
        ) : (
          <button className="new-post-btn" onClick={handlePostBtnClick}>
            글 등록
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}

export default Category;
