import React from 'react'
import Content from '@/components/sections/first-steps/Content'
import Title from '@/components/sections/first-steps/Title'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Nuestro Programa',
  };

const page = () => {

    return (
    <>
        <Title />
        <Content />
    </>
    )
}

export default page