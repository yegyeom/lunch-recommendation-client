const RealTimeMenu = () => {
  const menuItems = [
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
    { menu: "음식A" },
  ];

  const openModal = () => {
    console.log("modal");
  };

  const menuList = menuItems.map((item, idx) => (
    <div onClick={openModal} className="real-time-menu" key={idx}>
      {idx + 1}. &nbsp;{item.menu}
    </div>
  ));

  return (
    <div className="real-time-container">
      <h3>실시간 인기메뉴</h3>
      <span>현 시각 가장 많이 선택된 메뉴예요!</span>
      <div className="real-time-box">{menuList}</div>
    </div>
  );
};

export default RealTimeMenu;
