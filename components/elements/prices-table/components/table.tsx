import React from "react";
import { pricing } from "@/data/table_pricing";
import plans from "@/data/pricing_plans";
import Check from '@/components/elements/ui/Check';
import Empty from '@/components/elements/ui/Empty';
import Tooltip from '@/components/forms/ui/Tooltip';

interface Props {
    price: string;
}

const PricingTables: React.FC<Props> = () => {
    const renderCellContent = (cell: { check: string, text: string }) => {
        return (
            <div className="flex flex-col gap-2 text-center items-center">
                {cell.check === 'true' ? <Check /> : cell.check === 'false' ? <Empty /> : null}
                {cell.text && <span className="text-blue_gray">{cell.text}</span>}
            </div>
        );
    };

    type TextAlign = 'left' | 'right' | 'center' | 'justify';

    const fontStyle: React.CSSProperties = {
        fontWeight: 400,
        textAlign: 'left' as TextAlign,
    };

    const functionStyle: React.CSSProperties = {
        fontWeight: 500,
        textAlign: 'left' as TextAlign,
        color: '#101828'
    };

    const titleStyle: React.CSSProperties = {
        fontWeight: 600,
        textAlign: 'left' as TextAlign,
        color: '#6941C6',
    };

    return (
        <div className="applyFont text-sm" style={fontStyle}>
            {pricing.map((category, categoryIndex) => (
                <table key={categoryIndex}
                    className={`w-98vw md:w-95vw lg:w-80vw relative mb-8 table-fixed
                        ${categoryIndex === 0 && "border-b-[1px] border-gray-200"}`}>
                    <thead>
                        <tr>
                            <th style={titleStyle} className="text-lg font-semibold pl-5 md:pl-3 lg:pl-6 pb-4">
                                {category.title}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.funcionalidades.map((funcionalidad, i) => (
                            <tr key={i} className={`${i % 2 === 0 ? "bg-table_gray" : ""} h-12vh md:h-10vh lg:h-8vh`}>
                                <td style={functionStyle} className="pl-2 md:pl-3 lg:pl-6 text-start w-1/4">
                                    <div className="flex flex-col lg:flex-row items-center justify-start gap-1">
                                        <button className="underline lg:no-underline cursor-pointer lg:cursor-default lg:pointer-events-none">
                                            {funcionalidad}
                                        </button>
                                        <div className="hidden lg:flex">
                                            <div>
                                                {category.descripciones[i] !== "" && <Tooltip text={category.descripciones[i]} />}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                {
                                plans.map((p,j) =>
                                    <td key={j}>
                                        {renderCellContent(p.features[categoryIndex].values[i])}
                                    </td>
                                )
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
};

export default PricingTables;
