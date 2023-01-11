import React, { ReactNode } from "react";
import "./modal.scss";

interface ModalProps {
  active: any;
  setActive: any;
  element: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, element }) => (
  <div
    className={active ? "modal active" : "modal"}
    onClick={() => {
      sessionStorage.setItem("loginModalViewed", "true");
      setActive(false);
    }}
  >
    <div
      className={active ? "modal-content active" : "modal-content"}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {element}
    </div>
  </div>
);

export default Modal;
