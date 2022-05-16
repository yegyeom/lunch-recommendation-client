import React from "react";
import { useState } from "react";
import MenuHistory from "./MenuHistory";

const MyMenuPage = () => {
  const [nickname, setNickname] = useState("동작구고독한미식가");

  return (
    <div className="my-menu-container">
      <div className="user-text-container">
        <h2>
          <span className="user-nickname">{nickname}</span>님이
        </h2>
        <h2>
          선택하셨던 메뉴에요!
        </h2>
      </div>
      <MenuHistory />
    </div>
  );
};

export default MyMenuPage;
