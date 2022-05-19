import React from "react";
import CancelIcon from "../assets/cancel.png";

const Modal = ({
  title,
  active,
  setActive,
  children,
  onClickAccept,
  isLogin,
}) => {
  if (!active) return <></>;

  return (
    <div
      className="modal-outer-box"
      onClick={(e) => {
        if (e.target.className === "modal-outer-box") setActive(false);
      }}
    >
      <div className="modal-inner-box">
        <header className="modal-header">
          <div>{title}</div>
          <button
            className="modal-close-button"
            onClick={() => setActive(false)}
          >
            <img
              className="modal-close-image"
              src={CancelIcon}
              alt="모달 취소 버튼"
            ></img>
          </button>
        </header>
        {children}
        <footer className="modal-footer">
          {isLogin ? (
            <>
              <button
                className="modal-accept-button"
                onClick={() => {
                  onClickAccept.call();
                  setActive(false);
                }}
              >
                예
              </button>
              <button
                className="modal-cancel-button"
                onClick={() => setActive(false)}
              >
                아니오
              </button>
            </>
          ) : (
            <div>
              NYOM회원만 이용 가능한 기능입니다. 로그인 후 이용해보세요!
            </div>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Modal;
