import React, { useContext } from "react";
import MenuHistory from "./MenuHistory";
import { AuthContext } from "../../contexts/AuthContextProvider";

const MyMenuPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="my-menu-container">
        <div className="user-text-container">
          <h2>
            <span className="user-nickname">{user.profile.nickname}</span>
            님이
          </h2>
          <h2>선택하셨던 메뉴에요!</h2>
        </div>
        <MenuHistory />
      </div>
    </>
  );
};

export default MyMenuPage;
