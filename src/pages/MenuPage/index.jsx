import React, { useState } from "react";

import RealTimeMenu from "./RealTimeMenu";
import main_img from "../../assets/main_img.png";
import MenuList from "./MenuList";
import Modal from "../../components/Modal";

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [modalActive, setModalActive] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setModalActive(true);
  };

  return (
    <>
      <div className="menu-container">
        <div className="menu-recommend-container">
          <img className="main-img" alt="main_img" src={main_img} />
          <MenuList onClickMenu={handleMenuClick} />
        </div>
        <RealTimeMenu onClickMenu={handleMenuClick} />
      </div>
      {selectedMenu && (
        <Modal
          title={selectedMenu.name}
          active={modalActive}
          setActive={setModalActive}
        >
          <div className="modal-content">
            <img
              className="modal-image"
              src={selectedMenu.src}
              alt="음식 이미지"
            ></img>
            <p>
              <span className="menu-name">{selectedMenu.name}</span>
              <span>을(를) 오늘의 메뉴로 선정하시겠습니까?</span>
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MenuPage;
