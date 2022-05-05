import { useState, useEffect } from "react";

function Category() {
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const allTitle = document.getElementsByClassName("category");
    for (let i of allTitle) i.style = "color: #888888";

    const element = document.getElementById("all");
    element.style = "color: #E8DE8A";
  }, []);

  const categoryItems = [
    { title: "전체", id: "all" },
    { title: "질문", id: "question" },
    { title: "추천", id: "recommendation" },
    { title: "자유", id: "free" },
  ];

  const handleCategoryClick = (id) => {
    return () => {
      setCategory(id);

      const allTitle = document.getElementsByClassName("category");
      for (let i of allTitle) i.style = "color: #888888";

      const element = document.getElementById(id);
      element.style = "color: #E8DE8A";
      console.log(id);
    };
  };

  const categoryList = categoryItems.map((item, idx) => (
    <div
      id={item.id}
      onClick={handleCategoryClick(item.id)}
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
