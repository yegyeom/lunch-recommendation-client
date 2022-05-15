import React from "react";

const MenuList = () => {
  const menuItems = [
    {
      title: "화창한 오늘, 이런 메뉴 어때요?",
      info: [
        { menu: "떡볶이" },
        { menu: "쌀국수" },
        { menu: "마라샹궈" },
        { menu: "초밥" },
        { menu: "스테이크덮밥" },
      ],
    },
    {
      title: "비오는 오늘, 이런 메뉴 어때요?",
      info: [
        { menu: "떡볶이" },
        { menu: "쌀국수" },
        { menu: "마라샹궈" },
        { menu: "초밥" },
        { menu: "스테이크덮밥" },
      ],
    },
    {
      title: "여름 밤, 이런 메뉴 어때요?",
      info: [
        { menu: "떡볶이" },
        { menu: "쌀국수" },
        { menu: "마라샹궈" },
        { menu: "초밥" },
        { menu: "스테이크덮밥" },
      ],
    },
    {
      title: "다른 사람들은 이런 메뉴도 먹었어요",
      info: [
        { menu: "낙곱새" },
        { menu: "마라탕" },
        { menu: "샌드위치" },
        { menu: "샐러드" },
        { menu: "파스타" },
      ],
    },
  ];

  const menuList = menuItems.map((item, idx) => {
    return (
      <div key={idx}>
        <h3>{item.title}</h3>
      </div>
    );
  });

  return <div className="menu-list-container">{menuList}</div>;
};

export default MenuList;
