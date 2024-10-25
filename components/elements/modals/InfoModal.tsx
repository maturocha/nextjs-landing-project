import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

interface Props {
  type: 'success'  | 'error' | 'info' | 'warning'
  body: string | React.ReactElement | React.ReactElement[];
  className?: string;
  confirmText: string;
  onConfirm?: () => void;
  cancelText: string;
  onCancel: () => void;
}

function ActionModal({
  className = '', 
  type,
  body,
  confirmText,
  onConfirm,
  cancelText,
  onCancel
}: Props) {

  const color = {
    success: 'text-green-default',
    info: 'text-blue-moderate',
    error: 'text-red-500',
    warning: 'text-gray-800',
  }

  const bgColor = {
    info: 'bg-blue-moderate',
    success: 'bg-primary',
    error: 'bg-red-500',
    warning: 'bg-gray-800 hover:bg-gray-500'
  }

  const iconMessage = {
    success: <FaCheckCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
    info: <FaInfoCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
    error: <FaExclamationCircle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />,
    warning: <FaExclamationTriangle className={`mx-auto mb-4 w-8 md:w-14 h-8 md:h-14 ${color[type]}`} />
  }

  return <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-10">
  <div className="modal-overlay absolute w-full h-full bg-gray-200 opacity-70"></div>

    <div className="modal-container bg-white rounded shadow-lg z-50 overflow-y-auto">

         {/* <!-- Modal content --> */}
         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-end p-2">
              <button type="button" onClick={onCancel} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
              </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 pt-0 text-center">
            
              {iconMessage[type]}  

              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{body}</h3>

              <button type="button" onClick={onConfirm} className={`text-white font-semibold ${bgColor[type]} uppercase rounded-full text-sm px-5 py-2.5 text-center`}>
                  {confirmText}
              </button>
          </div>
      </div>
  </div>
</div>;
}

export default ActionModal;