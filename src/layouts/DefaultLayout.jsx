import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  const navItems = [
    { path: "/preference", title: "선호도 조사" },
    { path: "/menu", title: "오늘의 메뉴" },
    { path: "/community", title: "커뮤니티" },
    { path: "/guide", title: "이용가이드" },
  ];

  const navList = navItems.map((item, idx) => (
    <Link to={item.path} key={idx} className="header-navi">
      {item.title}
    </Link>
  ));

  return (
    <div className="container">
      <div className="header-layout">
        <div className="header-menu">
          <div>점심메뉴추천(logo)</div>
          <div>{navList}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default DefaultLayout;
