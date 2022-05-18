import { NavLink } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import header_logo from "../assets/logo_3.png";
import API from "../api";
import { deleteAuthorizationHeader } from "../api/axios";
import { AuthContext } from "../contexts/AuthContextProvider";
import { AUTH_KEY } from "../api/axios";

const topNavItems = [
  { path: "/notice", title: "공지사항" },
  { path: "/login", title: "로그인", auth: true },
  { path: "/signup", title: "회원가입", auth: true },
];

const downNavItems = [
  { path: "/", title: "오늘의 메뉴" },
  { path: "/mymenu", title: "나의 메뉴" },
  { path: "/community/posts", title: "커뮤니티" },
  { path: "/guide", title: "이용가이드" },
];

function DefaultLayout({ children }) {
  const { isLogin, setIsLogin, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate("/");
  };

  const handleLogoutButtonClick = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsLogin(false);
    setUser(null);
    deleteAuthorizationHeader();
  };

  useEffect(() => {
    (async function () {
      const data = await API.auth.user();
      if (data) {
        setUser(data);
        setIsLogin(true);
      }
    })();
  }, [isLogin, setUser, setIsLogin]);

  const topNavList = topNavItems.map(
    (item, idx) =>
      (!item.auth || !isLogin) && (
        <NavLink
          to={item.path}
          key={idx}
          style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
        >
          {item.title}
        </NavLink>
      )
  );

  const downNavList = downNavItems.map((item, idx) => (
    <NavLink
      to={item.path}
      key={idx}
      style={({ isActive }) => (isActive ? { color: "#E5DB7E" } : {})}
    >
      {item.title}
    </NavLink>
  ));

  user &&
    topNavList.unshift(
      <span>{`${user.profile.nickname}님, 안녕하세요!`}</span>
    );
  isLogin &&
    topNavList.push(
      <button onClick={handleLogoutButtonClick}>로그아웃</button>
    );

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
      <div className="content-container">{children}</div>
    </div>
  );
}

export default DefaultLayout;
