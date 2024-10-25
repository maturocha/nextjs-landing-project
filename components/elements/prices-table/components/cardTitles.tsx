import React from "react";

interface PriceCardProps {
    titles: string[];
    recomendados: boolean[];
}

const CardTitles: React.FC<PriceCardProps> = ({
    titles,
    recomendados
}) => {

    return (
        <div
        className="w-80vw hidden xl:flex xl:space-x-4"
        
        style={{borderBottom: "1px solid #EAECF0"}}>
            <div className="flex flex-1"></div>
            {
                titles.map((title, index) => (
                    <div className="flex flex-1 gap-1 text-xl mb-1" key={index}>
                        <div className="">{title}</div>
                        {recomendados[index] && (
                        <p className="h-full">
                            <strong
                                className="rounded-lg p-1 text-sm"
                                style={{
                                    outline: "1px solid #E9D7FE",
                                    color: "#6941C6",
                                    fontWeight: 500,
                                    background: "#F9F5FF",
                                }}
                            >
                                Recomendado
                            </strong>
                        </p>
                )}
                    </div>
                ))
            }
        </div>
    );
};

export default CardTitles;
