import React, { useContext, useEffect, useState } from "react";
import MenuHistory from "./MenuHistory";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import API from "../../api";

const MyMenuPage = () => {
  const { isLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    if (!isLogin) navigate("/login");
    else {
      setNickname(user.profile.nickname);
      (async function () {
        const data = await API.auth.getHistory({ id: user.pk });
        console.log("mymenu", data);
        setUserHistory(data);
      })();
    }
  }, []);

  return (
    <>
      <div className="my-menu-container">
        <div className="user-text-container">
          <h2>
            <span className="user-nickname">{nickname}</span>
            님이
          </h2>
          <h2>선택하셨던 메뉴에요!</h2>
        </div>
        <MenuHistory userHistory={userHistory} />
      </div>
    </>
  );
};

export default MyMenuPage;
