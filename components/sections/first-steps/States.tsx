"use client";

import React, {useState, Dispatch, SetStateAction} from "react";

interface Props {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

const states: React.FC<Props> = ({state, setState}) => {

    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex w-11/12 md:max-w-screen-md justify-between bg-light_violet px-3 lg:px-2 py-3 lg:py-2 my-4 border-1px border-border_gray rounded-lg overflow-x-auto gap-3 lg:gap-0">
                <div className="flex items-center justify-center min-w-fit">
                    <button
                        className={`
                    rounded p-2 cursor-pointer
                    ${state === "pasos" ? "text-primary bg-white shadow font-semibold" : "text-not_active_gray bg-none hover:text-primary transition 0.3s"}
                    `}
                        onClick={() => setState("pasos")}
                    >
                        Pasos iniciales
                    </button>
                </div>
                <div className="flex items-center justify-center min-w-fit">
                    <button
                        className={`
                    rounded p-2 cursor-pointer
                    ${state === "implementando" ? "text-primary bg-white shadow" : "text-not_active_gray bg-none hover:text-primary transition 0.3s"}
                    `}
                    onClick={() => setState("implementando")}
                    >
                        Implementando el club
                    </button>
                </div>
                <div className="flex items-center justify-center min-w-fit">
                    <button
                        className={`
                    rounded p-2 cursor-pointer
                    ${state === "preparate" ? "text-primary bg-white shadow" : "text-not_active_gray bg-none hover:text-primary transition 0.3s"}
                    `}
                    onClick={() => setState("preparate")}
                    >
                        Prepárate para las competencias
                    </button>
                </div>
                <div className="flex items-center justify-center min-w-fit">
                    <button
                        className={`
                    rounded p-2 cursor-pointer
                    ${state === "mirando" ? "text-primary bg-white shadow" : "text-not_active_gray bg-none hover:text-primary transition 0.3s"}
                    `}
                    onClick={() => setState("mirando")}
                    >
                        Mirando hacia el futuro
                    </button>
                </div>
            </div>
        </div>
    );
};

export default states;
