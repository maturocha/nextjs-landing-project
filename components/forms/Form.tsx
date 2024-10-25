import React, {ReactNode, FormEvent} from "react";
import Image from 'next/image';

import logoImage from 'public/logo.svg';
import Spinner from '@/components/elements/ui/Spinner';

interface Props {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
    message?: string;
    loading?: boolean;
    buttonText: string;
    disabledButton: boolean;
    logo: boolean;
}

const Form: React.FC<Props> = ({onSubmit, children, message, loading, buttonText, disabledButton, logo}) => {
    
    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
            {
                logo && 
                <div className="flex w-full justify-center items-center">
                    <Image src={logoImage} alt="Logo" className="w-48 mb-6 lg:mb-4" />
                </div>
            }
            
            {children}
            
            <button
                    type="submit"
                    className={`${loading || disabledButton ? "bg-gray-200 cursor-default" : "bg-purple hover:bg-violet-ligth cursor-pointer"} py-3 rounded-xl text-white w-full h-12 `}
                    disabled={loading || disabledButton}
                >
                    {loading ? (
                        <>
                            <Spinner />
                        </>
                    ) : (
                        `${buttonText}`
                    )}
                </button>
                {message && (
                    <div className={`w-full text-center p-2 rounded-md ${message === "Gracias por logearte, recibirás información en tu correo electrónico." ? "text-blue-purple bg-green-default/40" : "text-red-700 bg-red-200"} relative`}>
                        <b className='absolute top-0 right-2 text-black cursor-pointer'>&times;</b>
                        {message}
                    </div>
                )}
        </form>
    );
};

export default Form;
