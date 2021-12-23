import { HTMLAttributes } from "react";
import ReactModal from "react-modal";

export type ModalProps = HTMLAttributes<HTMLElement> & {
  show: boolean;
};

export default function Modal({ show, children }: ModalProps) {
  return (
    <>
      <ReactModal
        isOpen={show}
        ariaHideApp={false}
        contentLabel="Modal"
        style={{
          content: {
            position: "relative",
            width: "650px",
            height: "350px",
            backgroundColor: "#ffffff",
            marginRight: "auto",
            marginLeft: "auto",
            top: "20%",
          },
        }}
      >
        {children}
      </ReactModal>
    </>
  );
}
