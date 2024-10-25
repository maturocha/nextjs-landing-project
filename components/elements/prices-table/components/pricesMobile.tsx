import React, { Dispatch, SetStateAction } from "react";
import PriceCard from "@/components/elements/prices-table/components/Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import priceCardsData from "@/data/pricing_plans"; // Ajusta la ruta según tu estructura de carpetas

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
    const priceTitles = priceCardsData.map(card => card.titleInfo);

    return (
        <>
            <div className="applyFont flex flex-col px-6 justify-center items-center">
                <div className="flex justify-center items-center w-full h-auto px-2 md:px-32">
                    <Carousel
                        className="w-90vw md:w-80vw lg:w-60vw h-auto bg-gray-50 pb-10 lg:px-5 xl:px-0 px-2"
                        showStatus={false}
                        showThumbs={false}
                        onChange={(index) => setPrice(priceTitles[index])} // Aquí se hace el setPrice
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        position: 'absolute',
                                        left: '-30px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <span
                                        style={{
                                            border: 'solid #3D4495',
                                            borderWidth: '0 3px 3px 0',
                                            padding: '8px',
                                            display: 'inline-block',
                                            transform: 'rotate(135deg)',
                                        }}
                                    />
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        position: 'absolute',
                                        right: '-30px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <span
                                        style={{
                                            border: 'solid #3D4495',
                                            borderWidth: '0 3px 3px 0',
                                            padding: '8px',
                                            display: 'inline-block',
                                            transform: 'rotate(-45deg)',
                                        }}
                                    />
                                </button>
                            )
                        }
                        renderIndicator={(onClickHandler, isSelected, index, label) => {
                            const indicatorStyle = {
                                background: isSelected ? '#3D4495' : '#D0D5DD',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                display: 'inline-block',
                                margin: '0 8px',
                                cursor: 'pointer',
                            };
                            return (
                                <li
                                    style={indicatorStyle}
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    value={index}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`${label} ${index + 1}`}
                                />
                            );
                        }}
                    >
                        {/* Cards del carousel */}
                        {priceCardsData.map((card, index) => (
                            <div key={index} className="px-2 lg:px-16 mt-10 pt-4 pb-12">
                                <PriceCard
                                    title={card.titleInfo}
                                    setPlan={setPlan}
                                    price={card.price}
                                    subtitle={card.subtitle}
                                    description={card.description}
                                    recomendado={card.recomendado}
                                    responsive={true}
                                    modalOpen={modalOpen}
                                    setmodalOpen={setModalOpen}
                                    alertMessage={alertMessage}
                                    setAlertMessage={setAlertMessage}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default PriceCards;
