import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const handleSingupClick = (e) => {
    navigate("/signup");
  };

  return (
    <div className="right-outer">
      <div className="right-inner">
        <div>
          아직 회원이 아니신가요?
          <br />
          지금 바로 회원가입!
          <br />
          <br />
          회원가입
        </div>
        <div>
          <br />
          간편한 회원가입으로
          <br />
          NYOM의 서비스를 이용해보세요.
        </div>
        <button onClick={handleSingupClick}>회원가입 하기</button>
      </div>
    </div>
  );
};

export default Signup;
