import { useState } from "react";

interface Props {
  defaultOption: string
  handleClick: (option:any) => void;
  className?: string;
  options: any
  
}

const SwitchLabel = ({
  defaultOption,
  options,
  className = '',
  handleClick
  
}: Props) => {

  let activeItem= options.filter((item: any)=>item.value == defaultOption )[0]
  let inactiveItem= options.filter((item: any)=>item.value !== defaultOption )[0]

  return (
    <div className={`flex w-fit items-center tracking-wider text-xs uppercase 
                    transition ease-in-out delay-300 transform border border-violet-water 
                    rounded-full p-1 cursor-pointer
                    ${options[0].value == defaultOption ? '' : 'flex-row-reverse'}`}
							onClick={
								() => handleClick(inactiveItem.value)
							}
              		>
        <div className={`rounded-full shadow-md transform duration-300 ease-in-out px-4 py-1 mx-1 bg-violet-water text-primary`}>
            {activeItem.label}
        </div>{" "}
        <span className="px-2 py-1 text-primary">
        {inactiveItem.label}
        </span>
    </div>
  );
}

export default SwitchLabel;




