import React from 'react';
import Dropdown from '@/components/sections/first-steps/Dropdown';

interface Paragraph {
    title: string;
    content: string;
    list: boolean;
}

interface ClubData {
    title: string;
    paragraphs: Paragraph[];
}

interface Props {
    data: ClubData[];
}

const DataContent: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data.map((step, index) => (
                <Dropdown key={step.title + index} title={step.title} number={index + 1} active={index === 0}>
                    {step.paragraphs.map((paragraph, paraIndex) => (
                        <div
                            key={paragraph.title + paraIndex}
                            className={`flex flex-col px-2 ${!paragraph.list && "py-4"}`}
                        >
                            {paragraph.title && (
                                <div className="text-primary font-semibold py-2">{paragraph.title}</div>
                            )}
                            <ul className="text-blue_gray">
                                {paragraph.list ? (
                                    <li className="list-disc list-inside">{paragraph.content}</li>
                                ) : (
                                    <p>{paragraph.content}</p>
                                )}
                            </ul>
                        </div>
                    ))}
                </Dropdown>
            ))}
        </div>
    );
}

export default DataContent;
