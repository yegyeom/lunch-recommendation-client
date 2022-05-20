import React, { useContext } from "react";
import tmp from "../../assets/temp.jpeg";
import { Fragment, useState } from "react";
import Modal from "../../components/Modal";
import API from "../../api";
import { AuthContext } from "../../contexts/AuthContextProvider";

const MenuHistory = ({ userHistory }) => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [modalActive, setModalActive] = useState(false);
  const { isLogin } = useContext(AuthContext);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setModalActive(true);
  };

  const onClickAccept = async () => {
    await API.auth.addLikeFood({ id: selectedMenu.food_id });
  };

  const EditDateList = userHistory.map((item) => {
    const arr1 = item.created_at.split("T");
    const arr2 = arr1[0].split("-");

    return arr2[0] + "년 " + arr2[1] + "월 " + arr2[2] + "일";
  });

  const historyList = userHistory.map((item, idx) => (
    <Fragment key={idx}>
      <div className="history-item">
        <img className="history-img" alt="menu_img" src={item.image} />
        <div>
          {EditDateList[idx]}에 드신 &nbsp;
          <span onClick={() => handleMenuClick(item)} value="testValue">
            {item.food_name}
          </span>
          &nbsp;어때요?
        </div>
      </div>
      {selectedMenu && (
        <Modal
          title={selectedMenu.food_name}
          active={modalActive}
          setActive={setModalActive}
          onClickAccept={onClickAccept}
          isLogin={isLogin}
        >
          <div className="modal-content">
            <img
              className="modal-image"
              src={selectedMenu.image}
              alt="음식 이미지"
            ></img>
            <p>
              <span className="menu-name">{selectedMenu.food_name}</span>
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
