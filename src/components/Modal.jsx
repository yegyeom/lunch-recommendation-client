import React from "react";
import CancelIcon from "../assets/cancel.png";

const Modal = ({ title, active, setActive, children, onClickAccept }) => {
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
        </footer>
      </div>
    </div>
  );
};

export default Modal;
