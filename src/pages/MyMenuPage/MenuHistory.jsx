import React from "react";
import tmp from "../../assets/tmp.jpg";

const MenuHistory = () => {
  const historyItems = [
    {
      title: "파스타",
      year: 2022,
      month: 5,
      day: 15,
      src: tmp,
    },
    {
      title: "고추장찜닭",
      year: 2022,
      month: 5,
      day: 15,
      src: tmp,
    },
    {
      title: "아이스아메리카노샷추가",
      year: 2022,
      month: 5,
      day: 15,
      src: tmp,
    },
  ];

  const historyList = historyItems.map((item, idx) => (
    <div className="history-item" key={idx}>
      <img className="history-img" alt="menu_img" src={item.src} />
      <div>
        {item.year}년 {item.month}월 {item.day}일에 드신&nbsp;
        <span>{item.title}</span>&nbsp;어때요?
      </div>
    </div>
  ));

  return <div className="my-menu-container">{historyList}</div>;
};

export default MenuHistory;
