import { NavLink } from "react-router-dom";
import { useState } from "react";

function DefaultLayout({ children }) {
  const [menu, setMenu] = useState(false);

  const topNavItems = [
    { path: "/notice", title: "공지사항" },
    { path: "/login", title: "로그인" },
    { path: "/signup", title: "회원가입" },
  ];
  const downNavItems = [
    { path: "/preference", title: "선호도 조사" },
    { path: "/menu", title: "오늘의 메뉴" },
    { path: "/restaurant", title: "주변식당 추천" },
    { path: "/community", title: "커뮤니티" },
    { path: "/guide", title: "이용가이드" },
  ];

  const topNavList = topNavItems.map((item, idx) => (
    <NavLink
      to={item.path}
      key={idx}
      style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
      onClick={() => setMenu(false)}
    >
      {item.title}
    </NavLink>
  ));

  const downNavList = downNavItems.map((item, idx) => (
    <NavLink
      to={item.path}
      key={idx}
      style={({ isActive }) => (isActive ? { color: "#E8DE8A" } : {})}
      onClick={() => setMenu(true)}
    >
      {item.title}
    </NavLink>
  ));

  return (
    <div className="container">
      <header>
        <div className="header-menu">
          <div id="logo">점심메뉴추천(logo)</div>
          <nav>
            <div id="top">{topNavList}</div>
            <div id="down">{downNavList}</div>
          </nav>
        </div>
      </header>
      {menu ? <hr /> : <></>}
      <div className="content-container">{children}</div>
    </div>
  );
}

export default DefaultLayout;
