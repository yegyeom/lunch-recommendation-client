import FoodSurvey from "./FoodSurvey";

const PreferencePage = () => {
  return (
    <div className="signup-container">
      <h3>회원가입</h3>
      <div className="preference-text">
        <div>음식 이상형 월드컵</div>
        <div>선호메뉴를 선택해주세요.</div>
        <div>선택한 결과는 더 정확한 메뉴추천에 사용됩니다.</div>
      </div>
      <FoodSurvey />
    </div>
  );
};

export default PreferencePage;
