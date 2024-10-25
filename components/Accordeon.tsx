import React, { useState, useRef, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
}

const Accordion: React.FC<Props> = ({ children, title }) => {
    const [isActive, setIsActive] = useState(false);
    const [maxHeight, setMaxHeight] = useState<string>('0px');
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isActive ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isActive]);

    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="flex w-full justify-between items-center" onClick={handleToggle}>
                        <div className='font-semibold text-purple_title'>{title}</div>
                        <div className={`text-gray-600 transform transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div
                        ref={contentRef}
                        className="accordion-content overflow-hidden transition-max-height duration-300 ease-in-out pr-4"
                        style={{ maxHeight }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
