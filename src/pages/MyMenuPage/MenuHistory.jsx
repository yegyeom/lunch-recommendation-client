import React from "react";
import tmp from "../../assets/temp.jpeg";
import { Fragment, useState } from "react";
import Modal from "../../components/Modal";

const MenuHistory = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [modalActive, setModalActive] = useState(false);

  const handleMenuClick = (menu) => {
    console.log(menu);
    setSelectedMenu(menu);
    setModalActive(true);
  };

  const historyItems = [
    {
      title: "파스타",
      year: 2022,
      month: 5,
      day: 15,
      src: tmp,
    },
    {
      title: "고추장찜닭",
      year: 2022,
      month: 5,
      day: 15,
      src: tmp,
    },
    {
      title: "아이스아메리카노샷추가",
      year: 2022,
      month: 5,
      day: 15,
      src: tmp,
    },
  ];

  const historyList = historyItems.map((item, idx) => (
    <Fragment key={idx}>
      <div className="history-item">
        <img className="history-img" alt="menu_img" src={item.src} />
        <div>
          {item.year}년 {item.month}월 {item.day}일에 드신&nbsp;
          <span onClick={() => handleMenuClick(item)} value="testValue">
            {item.title}
          </span>
          &nbsp;어때요?
        </div>
      </div>
      {selectedMenu && (
        <Modal
          title={selectedMenu.title}
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
              <span className="menu-name">{selectedMenu.title}</span>
              <span>을(를) 오늘의 메뉴로 선정하시겠습니까?</span>
            </p>
          </div>
        </Modal>
      )}
    </Fragment>
  ));

  return <div className="my-history-container">{historyList}</div>;
};

export default MenuHistory;
