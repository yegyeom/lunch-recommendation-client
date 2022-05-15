import { useState, useEffect } from "react";

function Category(props) {
  const [category, setCategory] = useState("전체");

  useEffect(() => {
    setCategory("전체");

    const allTitle = document.getElementsByClassName("category");
    for (let i of allTitle) i.style = "color: #888888";

    const element = document.getElementById("전체");
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
      <h2 className="community-category">{categoryList}</h2>
      <hr />
    </div>
  );
}

export default Category;
