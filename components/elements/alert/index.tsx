import React from 'react';
import ReactDOM from 'react-dom';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

interface Props {
  type: 'success' | 'info' | 'error';
  message: string | React.ReactElement | React.ReactElement[];
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  closeModal: () => void;
  reload: boolean;
}

function Modal({
  type,
  message,
  className = '',
  children,
  closeModal,
  reload,
}: Props) {
  const color = {
    success: 'text-green-default',
    info: 'text-blue-default',
    error: 'text-red-500',
  };

  const bgColor = {
    success: 'bg-green-default',
    info: 'bg-blue',
    error: 'bg-red-500',
  };

  const iconMessage = {
    success: <FaCheckCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
    info: <FaInfoCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
    error: <FaExclamationCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
  };

  const handleClose = () => {
    closeModal();
    if (reload) {
      window.location.reload();
    }
  };

  const modalContent = (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-10">
      <div className="modal-overlay fixed w-[100vw] h-[100vh] bg-gray-200 opacity-70"></div>

      <div className="modal-container bg-white dark:bg-white rounded shadow-lg z-50 overflow-y-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-end p-2">
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="popup-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            {iconMessage[type]}

            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{message}</h3>

            <button
              type="button"
              onClick={handleClose}
              className={`text-white ${bgColor[type]} uppercase rounded-full text-sm px-5 py-2.5 text-center`}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}

export default Modal;
