import { useNavigate } from "react-router";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warningText, setWarningText] = useState(false);

  const handleSingupClick = (e) => {
    navigate("/signup");
  };

  const handleIdChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    if (username.length <= 0 && password.length <= 0)
      setWarningText("아이디와 비밀번호를 모두 입력하세요!");
    else if (password.length === 0) setWarningText("비밀번호를 입력하세요!");
    else if (username.length === 0) setWarningText("아이디를 입력하세요!");
    else setWarningText(false);
  };

  return (
    <div className="login-container">
      <div className="left-outer">
        <div className="left-inner">
          <div>
            NYOM의 서비스를
            <br />
            바로 이용해보세요!
            <br />
            <br />
            이용자 로그인
          </div>
          <div>
            <br />
            간편 로그인으로
            <br />
            NYOM의 모든 서비스를 이용할 수 있습니다.
          </div>
          <div className="login-box">
            <div>
              <input
                onChange={handleIdChange}
                type="text"
                placeholder="아이디"
              />
              <input
                onChange={handlePasswordChange}
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <button onClick={handleLoginClick}>로그인</button>
          </div>
          {warningText && <div className="warning-text">{warningText}</div>}
        </div>
      </div>
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
    </div>
  );
};

export default LoginPage;
