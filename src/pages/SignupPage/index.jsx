import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

const SignupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [usernameNotification, setUsernameNotification] = useState(false);
  const [passwordNotification, setPasswordNotification] = useState(false);
  const [checkPasswordNotification, setCheckPasswordNotification] =
    useState(false);

  const handleIdChange = (e) => {
    const regExp = /^[0-9a-zA-Z_]{5,15}$/;
    if (regExp.test(e.target.value)) setUsernameNotification(true);
    else setUsernameNotification(false);
    setUsername(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const regExp = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (regExp.test(e.target.value)) setPasswordNotification(true);
    else setPasswordNotification(false);
    setPassword(e.target.value);
  };

  const handleCheckPasswordChange = (e) => {
    setCheckPassword(e.target.value);
    if (password !== e.target.value && e.target.value.length > 0)
      setCheckPasswordNotification(false);
    else setCheckPasswordNotification(true);
  };

  const handleComplete = async () => {
    const data = await API.auth.signUp({
      user_id: username,
      nickname,
      password,
      password2: checkPassword,
    });
    console.log("sign up", data);
    navigate("/preference");
  };

  return (
    <div className="signup-container">
      <h3>회원가입</h3>
      <form className="signup-form">
        <>
          <span>아이디</span>
          <input
            onChange={handleIdChange}
            type="text"
            username="username"
            placeholder="영문자, 숫자, 특수문자(_) 사용 가능합니다. (5자 이상, 15자 이하)"
          />
          {!usernameNotification && username.length > 0 ? (
            <span className="warning-text">
              영문자, 숫자, 특수문자(_) 사용 가능합니다. (5자 이상, 15자 이하)
            </span>
          ) : usernameNotification && username.length > 0 ? (
            <span className="confirm-text">사용 가능한 아이디입니다.</span>
          ) : (
            <span className="empty-text" />
          )}
        </>
        <>
          <span>닉네임</span>
          <input
            onChange={handleNicknameChange}
            type="text"
            username="nickname"
            placeholder="닉네임"
          />
          <span className="empty-text" />
        </>
        <>
          <span>비밀번호</span>
          <input
            onChange={handlePasswordChange}
            type="password"
            placeholder="영문자, 숫자, 특수문자를 모두 포함해야 합니다. (8자 이상)"
          />
          {!passwordNotification && password.length > 0 ? (
            <span className="warning-text">
              영문자, 숫자, 특수문자를 모두 포함해야 합니다. (8자 이상)
            </span>
          ) : passwordNotification && password.length > 0 ? (
            <span className="confirm-text">사용 가능한 비밀번호입니다.</span>
          ) : (
            <span className="empty-text" />
          )}
        </>
        <>
          <span>비밀번호 확인</span>
          <input
            onChange={handleCheckPasswordChange}
            type="password"
            placeholder="영문자, 숫자, 특수문자를 모두 포함해야 합니다. (8자 이상)"
          />
          {!checkPasswordNotification && checkPassword.length > 0 ? (
            <span className="warning-text">비밀번호가 일치하지 않습니다.</span>
          ) : checkPasswordNotification &&
            passwordNotification &&
            checkPassword.length > 0 &&
            password === checkPassword ? (
            <span className="confirm-text">비밀번호가 일치합니다.</span>
          ) : (
            <span className="empty-text" />
          )}
        </>
      </form>
      <div className="signup-button">
        <button
          className={
            username.length > 0 &&
            usernameNotification &&
            nickname.length > 0 &&
            password.length > 0 &&
            passwordNotification &&
            password === checkPassword
              ? "on"
              : "off"
          }
          onClick={
            username.length > 0 &&
            usernameNotification &&
            nickname.length > 0 &&
            password.length > 0 &&
            passwordNotification &&
            password === checkPassword
              ? handleComplete
              : null
          }
        >
          다음 &gt;
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
