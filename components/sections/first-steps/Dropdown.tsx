"use client"

import React, { useState, useRef, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
    number: number;
    active?: boolean;
}

const Dropdown: React.FC<Props> = ({ children, title, number, active }) => {
    const [isActive, setIsActive] = useState(active ? true : false);
    const [maxHeight, setMaxHeight] = useState<string>('0px');
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const functionHeight = ()=>{
            if (contentRef.current) {
                setMaxHeight(isActive ? `${contentRef.current.scrollHeight}px` : '0px');
            }
        }
        functionHeight();
    }, [isActive]);

    return (
        <>
            <div className="w-full py-4">
                <div className="flex items-center p-2 bg-table_gray hover:bg-table_gray/75 rounded-lg">
                    <div className="flex w-full items-center cursor-pointer" onClick={handleToggle}>
                        <div className='flex items-center gap-6'>
                            <div className={`py-2 px-8 text-center rounded text-white ${isActive ? "bg-primary " : "bg-light_purple "} text-5xl font-bold transition 0.2s`}>
                                {number}
                            </div>
                            <div className='text-primary text-2xl font-semibold'>
                                {title}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                        ref={contentRef}
                        className="accordion-content overflow-hidden transition-max-height duration-300 ease-in-out pr-6 mt-4"
                        style={{ maxHeight }}
                    >
                        {children}
                    </div>
            </div>
        </>
    );
};

export default Dropdown;
