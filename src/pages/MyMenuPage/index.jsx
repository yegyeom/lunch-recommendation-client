import React from "react";
import { useState } from "react";
import MenuHistory from "./MenuHistory";

const MyMenuPage = () => {
  const [nickname, setNickname] = useState("동작구고독한미식가");

  return (
    <div className="menu-container">
      <div className="user-text-container">
        <h2>
          {nickname}님이
          <br />
          선택하셨던 메뉴에요!
        </h2>
      </div>
      <MenuHistory />
    </div>
  );
};

export default MyMenuPage;
