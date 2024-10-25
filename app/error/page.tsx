import React from "react";
import {NextPage} from "next";
import Head from "next/head";

const ErrorPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <div>
                <h1>Error</h1>
                <p>Ese código de escuela no existe. Puedes registrarte en TRC Sports <b>aquí</b>. </p>
            </div>
        </>
    );
};

export default ErrorPage;