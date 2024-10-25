import { useState, useRef } from "react";

import { FaCopy } from 'react-icons/fa';

interface Props {
  textCopy: string;
  text: string;
  className?: string;
  
}

const LinkCopy = ({
  textCopy,
  text,
  className = '',
  
}: Props) => {

  const [copySuccess, setCopySuccess] = useState(false);
  const textInput = useRef(null);

  // This is the function we wrote earlier
  async function copyTextToClipboard(textCopy: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(textCopy);
    } else {
      return document.execCommand('copy', true, textCopy);
    }
  }

    // onClick handler function for the copy button
    const copyToClipboard = (e: any) => {
      e.preventDefault()
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(textCopy)
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
    <div className={`text-base text-primary hover:text-blue flex space-x-2 cursor-pointer items-center font-semibold ${className}`} onClick={(e) => copyToClipboard(e)}>
      <span
        ref={textInput}
       >
          {copySuccess ?
          'Link copiado!' :
          text
        }
        
      </span>
      <FaCopy className=""/>
    </div>
  );
}

export default LinkCopy;
