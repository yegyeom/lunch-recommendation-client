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
  const [foodInfo, setFoodInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const random = await API.recommendation.getRandomMenu();
      setMainData([random]);

      const popular = await API.recommendation.getPopularMenu();
      setPopularData(popular);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    (async function () {
      if (isLogin && user.profile.likes.length === 0) {
        const popularInterest =
          await API.recommendation.getPopularInterestMenu();
        console.log("1", popularInterest);
        setMainData([...mainData, popularInterest.slice(0, 5)]);
      } else if (isLogin && user.profile.likes.length > 0) {
        const userInterest = await API.recommendation.getUserInterestMenu();
        setMainData([...mainData, userInterest.slice(0, 5)]);
        console.log("2", userInterest);
      }
    })();
  }, [user, isLoading]);

  const handleMenuClick = async (menu) => {
    setSelectedMenu(menu);
    setModalActive(true);
    const data = await API.feature.getFoodInfo({ id: menu.food_id });
    setFoodInfo(data);
  };

  const onClickAccept = async () => {
    // await API.auth.addLikeFood({ id: selectedMenu.food_id });
    await API.auth.addHistory({ food_id: selectedMenu.food_id });
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
          isLogin={isLogin}
        >
          <div className="modal-content">
            <img
              className="modal-image"
              src={foodInfo.image}
              alt="?????? ?????????"
            ></img>
            <p>
              <span className="menu-name">{selectedMenu.food_name}</span>
              <span>???(???) ????????? ????????? ?????????????????????????</span>
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MenuPage;
