import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

interface Props {
  type: 'success'  | 'info' | 'error'
  message: string | React.ReactElement | React.ReactElement[];
  closeModal: () => void;
  reload: boolean;
}

function Modal({
  type,
  message,
  closeModal,
  reload,
}: Props) {

  const color = {
    success: 'text-green-default',
    info: 'text-blue-default',
    error: 'text-red-500'
  }

  const bgColor = {
    success: 'bg-green-default',
    info: 'bg-blue',
    error: 'bg-red-500'
  }

  const iconMessage = {
    success: <FaCheckCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
    info: <FaInfoCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
    error: <FaExclamationCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />
  }

  const handleClose = () => {
    closeModal();
    if (reload) {
      window.location.reload();
    }
  }

  return <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-10">
  <div className="modal-overlay absolute w-full h-full bg-gray-200 opacity-70"></div>

    <div className="modal-container bg-white dark:bg-white rounded shadow-lg z-50 overflow-y-auto">
         {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-end p-2">
              <button type="button" onClick={handleClose} className="absolute top-0 right-3 text-gray-600 text-3xl rounded hover:text-gray-800" data-modal-toggle="popup-modal">
                  &times;
              </button>
          </div>
          <div className="p-6 pt-0 text-center">
            
              {iconMessage[type]}  

              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{message}</h3>

              <button type="button" onClick={handleClose} className={`text-white ${bgColor[type]} uppercase rounded-full text-sm px-5 py-2.5 text-center`}>
                  Aceptar
              </button>
          </div>
      </div>
  </div>
</div>
}

export default Modal;
