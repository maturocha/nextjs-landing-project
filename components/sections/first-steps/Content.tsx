"use client"

import React, {useState} from 'react'

import Steps from '@/components/sections/first-steps/Steps'
import States from '@/components/sections/first-steps/States'

const Content = () => {
    const [state, setState] = useState("pasos");

    return (
    <>
        <States state={state} setState={setState} />
        <Steps state={state} />
    </>
    )
}

export default Content