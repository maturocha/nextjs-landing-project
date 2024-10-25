import React, { useState } from "react";
import Acc from "@/components/Accordeon";
import Tooltip from '@/components/forms/ui/Tooltip';
import { FaWhatsapp, FaCheck, FaTimes } from "react-icons/fa";

import plans from '@/data/pricing_plans';
import { pricing } from '@/data/table_pricing';

interface PriceCardProps {
    title?: string;
    titleInfo?: string;
    priceAcc?: string;
    setPlan: React.Dispatch<React.SetStateAction<string>>;
    price: string;
    subtitle?: string;
    description: string;
    recomendado?: boolean;
    responsive: boolean;
    modalOpen: boolean;  // Recibido como prop
    setmodalOpen: React.Dispatch<React.SetStateAction<boolean>>;  // Recibido como prop
    alertMessage: any;  // Recibido como prop
    setAlertMessage: React.Dispatch<React.SetStateAction<any>>;  // Recibido como prop
}

const PriceCard: React.FC<PriceCardProps> = ({
    title,
    priceAcc,
    price,
    titleInfo,
    setPlan,
    subtitle,
    description,
    recomendado,
    responsive,
    modalOpen,
    setmodalOpen,
    alertMessage,
    setAlertMessage
}) => {
    const [verInfo, setVerInfo] = useState<{[key: number]: boolean}>({});

    const renderCellContent = (cell: string | { check: string, text: string }) => {
        if (typeof cell === 'string') {
            return cell === 'true' ? (
                <div className="flex flex-col gap-2 text-center items-center">
                    <FaCheck className="text-purple"/>
                </div>
            ) : (
                <div className="flex flex-col gap-2 text-center items-center">
                    <FaTimes className="text-purple" />
                </div>
            );
        }

        return (
            <div className={`flex flex-col ${responsive ? "items-end" : "items-center"} justify-center w-full`}>
                {cell.check === 'true' && <FaCheck className="text-purple" />}
                {cell.check === 'false' && <FaTimes className="text-purple" />}
                {cell.check === 'none' && <p className="text-sm text-right w-full pr-2">{cell.text}</p>}
            </div>
        );
    };

    const functionStyle: React.CSSProperties = {
        fontWeight: 500,
        textAlign: 'left' as const,
        color: '#101828',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: "30px",
        textAlign: "left" as const,
        color: "#475467",
    };

    const priceStyle: React.CSSProperties = {
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "60px",
        textAlign: "left" as const,
        color: "#3D4495",
    };

    const descriptionStyle: React.CSSProperties = {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.25rem",
        textAlign: "left" as const,
        color: "#475467",
    };

    const subtitleStyle: React.CSSProperties = {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: "1.5rem",
        textAlign: "left" as const,
        color: "#475467",
    };

    const buttonStyle: React.CSSProperties = {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.5rem",
        textAlign: "left" as const,
        color: "#475467",
    };

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = `Buenas, me interesa el plan ${title || titleInfo} que vi en la web.`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    return (
        <div className={`flex flex-col ${responsive ? "bg-white shadow rounded-lg px-6 pb-12 pt-8" : "flex-1"}`}>
            {title && (
                <div className="flex items-center gap-3 justify-between w-full mb-6 flex-wrap">
                    <h2 style={titleStyle}>{title}</h2>
                    {recomendado && (
                        <strong
                            className="rounded-lg p-2 text-sm"
                            style={{
                                outline: "1px solid #E9D7FE",
                                color: "#6941C6",
                                fontWeight: 500,
                                background: "#F9F5FF",
                            }}
                        >
                            Recomendado
                        </strong>
                    )}
                </div>
            )}

            <div className="w-full xl:h-full min-h-fit relative">
                <div className={`relative h-full flex flex-col justify-between ${!title && "mt-6"}`}>
                    <div className="flex-grow">
                        <b style={priceStyle}>{price}</b>
                        {subtitle && (
                            <p className="pt-2" style={subtitleStyle}>
                                {subtitle}
                            </p>
                        )}
                        <p className={`py-4`} style={descriptionStyle}>
                            {description}
                        </p>
                    </div>
                </div>

                {responsive && (
                    <div className="mb-4 flex flex-col gap-6">
                        {pricing.map((item, index) => (
                            <Acc key={index} title={item.title}>
                                <table className="w-full mt-4 table-fixed">
                                    <tbody>
                                        {item.funcionalidades.map((funcionalidad, i) => (
                                            <tr key={i} className={`lg:text-[0.95rem] w-full `}>
                                                <td style={functionStyle} className="pl-2 md:pl-3 lg:pl-6 text-start gap-3 w-1/2">
                                                    <div className="flex flex-1 w-full gap-1 items-center text-sm">
                                                        {funcionalidad}
                                                        <div onClick={() => {}}>
                                                            {item.descripciones[i] !== "" && <Tooltip text={item.descripciones[i]} />}
                                                        </div>
                                                    </div>
                                                </td>
                                                {                                                    
                                                    plans.map((p,j) => {
                                                        if(p.features[index].name == item.title)
                                                        {
                                                            return <td key={j} className="py-2">{renderCellContent(p.features[index].values[i])}</td> 
                                                        }
                                                    })
                                                }
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Acc>
                        ))}
                    </div>
                )}

                <div className="flex flex-col gap-3 flex-1 text-white" style={buttonStyle}>
                    <a href={whatsappUrl}
                        target="_blank" rel="noopener noreferrer"
                        style={{ color: "#344054", border: "1px solid #D0D5DD" }}
                        className="w-full p-2 rounded-md hover:shadow transition 0.2s cursor-pointer no-underline flex justify-center items-center space-x-1">
                            <span>Hablar con ventas</span>
                            <FaWhatsapp className="w-5 h-5"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;
