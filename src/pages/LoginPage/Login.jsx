import { useState } from "react";
import API from '../../api';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warningText, setWarningText] = useState(false);

  const handleIdChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = async (e) => {
    if (username.length <= 0 && password.length <= 0)
      setWarningText("아이디와 비밀번호를 모두 입력하세요.");
    else if (password.length === 0) setWarningText("비밀번호를 입력하세요.");
    else if (username.length === 0) setWarningText("아이디를 입력하세요.");
    else {
      setWarningText(false);
      const data = await API.auth.login({username, password});
      console.log(data);
    }

  };

  return (
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
            <input onChange={handleIdChange} type="text" placeholder="아이디" />
            <input
              onChange={handlePasswordChange}
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <button type="submit" onClick={handleLoginClick}>
            로그인
          </button>
        </div>
        {warningText && <div className="warning-text">{warningText}</div>}
      </div>
    </div>
  );
};

export default Login;
