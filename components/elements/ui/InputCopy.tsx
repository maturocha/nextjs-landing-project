import { useState, useRef } from "react";

interface Props {
  
  text: string;
  className?: string;
  
}

const InputCopy = ({
  text,
  className = '',
  
}: Props) => {

  const [copySuccess, setCopySuccess] = useState(false);
  const textInput = useRef(null);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

    // onClick handler function for the copy button
    const copyToClipboard = (e: any) => {
      e.preventDefault()
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(text)
        .then(() => {
          // If successful, update the isCopied state value
          setCopySuccess(true);
          setTimeout(() => {
            setCopySuccess(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  return (
    <div className={`relative ${className}`}>
      <input
        ref={textInput}
        className="bg-gray-100 w-full h-12 italic focus:outline-none pl-6 pr-32 text-base text-gray-400 rounded-full focus:shadow-outline w-fit"
        type="text"
        value={text}
        readOnly
        placeholder="Regular input"/>
      <button className="absolute inset-y-0 right-0 flex items-center px-8 uppercase text-white bg-gradient-to-r from-zafiro to-purple text-white rounded-r-full"
              onClick={(e) => copyToClipboard(e)}>
        {copySuccess ?
          'Copiado!' :
          'Copiar'
        }
      </button>
    </div>
  );
}

export default InputCopy;
