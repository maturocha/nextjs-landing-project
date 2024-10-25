import React from "react";

import DataContent from "@/components/sections/first-steps/DataContent";

import steps from '@/data/digital-page/first_steps'
import club from '@/data/digital-page/club'
import competition from '@/data/digital-page/competition'
import future from '@/data/digital-page/future'

interface Props {
    state: string;
}

const Steps: React.FC<Props> = ({state}) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-11/12 xl:w-2/3 gap-6 py-8">
            {
                state === "pasos" &&
                <DataContent data={steps} />
            }
            {
                state === "implementando" &&
                <DataContent data={club} />
            }
            {
                state === "preparate" &&
                <DataContent data={competition} />
            }
            {
                state === "mirando" &&
                <DataContent data={future} />
            }
        </div>
        </div>
    );
};

export default Steps;
