import React from "react";

const RealTimeMenu = (props) => {
  const { onClickMenu, popularData } = props;

  const menuList = popularData.map((item, idx) => (
    <div
      className="real-time-menu"
      key={idx}
      onClick={() => {
        onClickMenu(item);
      }}
    >
      {`${idx + 1}. ${item.food_name}`}
    </div>
  ));

  return (
    <>
      <div className="real-time-container">
        <h3>실시간 인기메뉴</h3>
        <span>현 시각 가장 많이 선택된 메뉴예요!</span>
        <div className="real-time-box">{menuList}</div>
      </div>
    </>
  );
};

export default RealTimeMenu;
