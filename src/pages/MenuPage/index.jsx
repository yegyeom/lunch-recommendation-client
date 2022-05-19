import React, { useState, useEffect, useContext } from "react";
import RealTimeMenu from "./RealTimeMenu";
import main_img from "../../assets/main_img.png";
import MenuList from "./MenuList";
import Modal from "../../components/Modal";
import API from "../../api";
import { AuthContext } from "../../contexts/AuthContextProvider";

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [modalActive, setModalActive] = useState(false);
  const [popularData, setPopularData] = useState([]);
  const { isLogin, user } = useContext(AuthContext);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    (async function () {
      const random = await API.recommendation.getRandomMenu();
      setMainData([random]);

      const popular = await API.recommendation.getPopularMenu();
      setPopularData(popular);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (isLogin && user.profile.likes.length === 0) {
        const popularInterest =
          await API.recommendation.getPopularInterestMenu();
        setMainData([...mainData, popularInterest.slice(0, 5)]);
      } else if (isLogin && user.profile.likes.length > 0) {
        const userInterest = await API.recommendation.getUserInterestMenu();
        setMainData([...mainData, userInterest.slice(0, 5)]);
      }
    })();
  }, [user]);

  const handleMenuClick = async (menu) => {
    setSelectedMenu(menu);
    setModalActive(true);
    const data = await API.feature.getFoodInfo({ id: menu.food_id });
    console.log(data);
  };

  const onClickAccept = async () => {
    console.log("accept", selectedMenu);
    // const data = await API.
  };

  return (
    <>
      <div className="menu-container">
        <div className="menu-recommend-container">
          <img className="main-img" alt="main_img" src={main_img} />
          <MenuList onClickMenu={handleMenuClick} menuData={mainData} />
        </div>
        <RealTimeMenu onClickMenu={handleMenuClick} popularData={popularData} />
      </div>
      {selectedMenu && (
        <Modal
          title={selectedMenu.food_name}
          active={modalActive}
          setActive={setModalActive}
          onClickAccept={onClickAccept}
        >
          <div className="modal-content">
            <img
              className="modal-image"
              // src={"../../assets/temp.jpeg"}
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
    </>
  );
};

export default MenuPage;
