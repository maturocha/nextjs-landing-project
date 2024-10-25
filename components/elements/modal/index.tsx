import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  closeModal: () => void;
  overflow?: "scroll" | "ellipsis" | "hidden" | "auto" | "visible" | "y-scroll";
  theme?: "white" | "dark";
}

function Modal({
  className = "",
  children,
  closeModal,
  overflow = "ellipsis",
  theme = "dark",
}: Props) {
  const escFunction = useCallback((event: { keyCode: number; }) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
      <div
        className={
          (theme === "dark" ? "bg-violet-dark" : "bg-white") +
          " rounded shadow-lg z-50 overflow-" +
          overflow +
          " w-auto max-w-[90%] max-h-[100%] " +
          className
        }
      >
        <div
          onClick={closeModal}
          className="modal-close absolute top-2 right-6 cursor-pointer flex flex-col items-center mt-4 mr-4 text-sm z-50 text-white"
        >
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
        {children}
      </div>
    </div>,
    document.body // Renderiza el modal en el body
  );
}

export default Modal;
