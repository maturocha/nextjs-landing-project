import React, { Dispatch, SetStateAction } from "react";
import PriceCard from "@/components/elements/prices-table/components/Card";
import CardTitles from "@/components/elements/prices-table/components/cardTitles";
import priceCardsData from "@/data/pricing_plans";

interface Props {
    setPrice: (price: string) => void,
    price: string;
    alertMessage: string;
    modalOpen: boolean;
    setAlertMessage: (message: string) => void;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    plan: string;
    setPlan: Dispatch<SetStateAction<string>>;
}

const PriceCards: React.FC<Props> = ({ setPrice, price, alertMessage, modalOpen, setAlertMessage, setModalOpen, plan, setPlan }) => {
    return (
        <>
            <div className="applyFont flex flex-col px-6 justify-center items-center">
                <CardTitles
                    titles={priceCardsData.map(card => card.titleInfo)} // Obtén los títulos del JSON
                    recomendados={priceCardsData.map(card => card.recomendado)} // Obtén los valores de recomendado del JSON
                />
                
                <div className="flex flex-col justify-start lg:items-end lg:w-80vw">
                    <div className="flex space-x-4 justify-end w-80vw">
                        <div className="flex flex-1"></div>
                        {priceCardsData.map((card, index) => (
                            <PriceCard
                                key={index}
                                titleInfo={card.titleInfo}
                                price={card.price}
                                setPlan={setPlan}
                                subtitle={card.subtitle}
                                description={card.description}
                                recomendado={card.recomendado}
                                responsive={false}
                                modalOpen={modalOpen}
                                setmodalOpen={setModalOpen}
                                alertMessage={alertMessage}
                                setAlertMessage={setAlertMessage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceCards;
