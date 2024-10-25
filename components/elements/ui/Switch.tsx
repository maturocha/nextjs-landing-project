import { useState } from "react";

interface Props {
  
  
  className?: string;
  
}

const Switch = ({
  
  className = '',
  
}: Props) => {

  const [toggle, setToggle] = useState(true);
  const toggleClass = " ";
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        {/*   Switch Container */}

        <div
          className="md:w-14 md:h-8 w-12 h-6 flex items-center border border-black rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={`md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${(toggle ? 'bg-gray-700' : 'bg-green transform translate-x-5')}`}
          ></div>
        </div>
      
        
      </div>
    </>
  );
}

export default Switch;
