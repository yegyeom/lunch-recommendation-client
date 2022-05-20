import food_1 from "../../../assets/food_1.png";
import food_2 from "../../../assets/food_2.png";
import food_3 from "../../../assets/food_3.png";
import food_4 from "../../../assets/food_4.png";
import food_5 from "../../../assets/food_5.png";
import food_6 from "../../../assets/food_6.png";
import food_7 from "../../../assets/food_7.png";
import food_8 from "../../../assets/food_8.png";
import API from "../../../api";
import { useNavigate } from "react-router-dom";

const PreferencePage = () => {
  const navigate = useNavigate();

  const items1 = [
    { index: 1, title: "고기/구이", src: food_1, color: "#E9B27F" },
    { index: 2, title: "밥/백반/죽/국수", src: food_2, color: "#EDD1B7" },
    { index: 3, title: "분식/튀김", src: food_3, color: "#D9A859" },
  ];

  const items2 = [
    { index: 4, title: "중식/아시안", src: food_4, color: "#EFDA8C" },
    { index: 5, title: "일식/돈까스", src: food_5, color: "#C2B5D8" },
    { index: 6, title: "국/찜/탕/찌개", src: food_6, color: "#C9DD6D" },
  ];

  const items3 = [
    { index: 7, title: "치킨", src: food_7, color: "#D4D2CA" },
    { index: 8, title: "양식/패스트푸드", src: food_8, color: "#B2CDE0" },
  ];

  const handleItemClick = async (index) => {
    await API.auth
      .interest({ category_id: index })
      .then(() => {
        navigate("/");
      })
      .catch(() => console.errors("interest error"));
  };

  const list1 = items1.map((item, idx) => (
    <div
      className="preference-item"
      style={{ backgroundColor: `${item.color}` }}
      key={idx}
      onClick={() => handleItemClick(item.index)}
    >
      <img className="food-icon" src={item.src} alt="음식 아이콘"></img>
      <span>{item.title}</span>
    </div>
  ));

  const list2 = items2.map((item, idx) => (
    <div
      className="preference-item"
      style={{ backgroundColor: `${item.color}` }}
      key={idx}
      onClick={() => handleItemClick(item.index)}
    >
      <img className="food-icon" src={item.src} alt="음식 아이콘"></img>
      <span>{item.title}</span>
    </div>
  ));

  const list3 = items3.map((item, idx) => (
    <div
      className="preference-item"
      style={{ backgroundColor: `${item.color}` }}
      key={idx}
      onClick={() => handleItemClick(item.index)}
    >
      <img className="food-icon" src={item.src} alt="음식 아이콘"></img>
      <span>{item.title}</span>
    </div>
  ));

  return (
    <div className="signup-container">
      <h3>회원가입</h3>
      <div className="preference-text">
        <div>선호도 조사</div>
        <div>선호메뉴를 선택해주세요.</div>
        <div>선택한 결과는 더 정확한 메뉴추천에 사용됩니다.</div>
      </div>
      <div className="survey">
        <div className="preference-items">{list1}</div>
        <div className="preference-items">{list2}</div>
        <div className="preference-items">{list3}</div>
      </div>
    </div>
  );
};

export default PreferencePage;
