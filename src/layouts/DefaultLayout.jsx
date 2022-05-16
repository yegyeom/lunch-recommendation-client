import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import header_logo from "../assets/logo_3.png";

function DefaultLayout({ children }) {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate("/");
  };

  const topNavItems = [
    { path: "/notice", title: "공지사항" },
    { path: "/login", title: "로그인" },
    { path: "/signup", title: "회원가입" },
  ];

  const downNavItems = [
    { path: "/", title: "오늘의 메뉴" },
    { path: "/mymenu", title: "나의 메뉴" },
    { path: "/community", title: "커뮤니티" },
    { path: "/guide", title: "이용가이드" },
  ];

  const topNavList = topNavItems.map((item, idx) => (
    <NavLink
      to={item.path}
      key={idx}
      style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
      onClick={
        item.title === "회원가입" || item.title === "공지사항"
          ? () => setMenu(true)
          : () => setMenu(false)
      }
    >
      {item.title}
    </NavLink>
  ));

  const downNavList = downNavItems.map((item, idx) => (
    <NavLink
      to={item.path}
      key={idx}
      style={({ isActive }) => (isActive ? { color: "#E5DB7E" } : {})}
      onClick={() => setMenu(true)}
    >
      {item.title}
    </NavLink>
  ));

  return (
    <div className="container">
      <header>
        <div className="header-menu">
          <img
            className="header-logo"
            alt="header_logo"
            src={header_logo}
            onClick={handleImgClick}
          />
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
