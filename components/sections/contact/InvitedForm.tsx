"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Icon } from '@iconify/react';

import SchoolsForm from '@/components/sections/contact/SchoolsForm';
import AlertModal from "@/components/elements/alert";

import Form from '@/components/forms/Form';
import InputForm from '@/components/forms/InputForm';

interface OptionType {
    value: number;
    label: string;
}

interface StudentData {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    school_id: number;
    country_id: number;
    role_id: number;
    rut: string;
}

interface Organization {
    id: number;
    name: string;
}

interface Props {
    background?: string;
    italic?: boolean;
    not_rounded_top?: boolean;
    notPadding?: boolean;
}

const InvitedForm: React.FC<Props> = ({background, italic, not_rounded_top, notPadding}) => {
    const [school, setSchool] = useState<string>('');
    const [country, setCountry] = useState('');
    const [popUpSucess, setPopUpSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [firstLoading, setFristLoading] = useState(false);
    const [countryOptions, setCountryOptions] = useState<OptionType[]>([]);
    const [loadingURL, setLoadingURL] = useState(false);
    const [preSelected, setPreSelected] = useState<OptionType|null>(null);
    const [inputValue, setInputValue] = useState('');

    const [phoneMaxError, setPhoneMaxError] = useState(false);
    const [emailRegisteredError, setEmailRegisteredError] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);
    const [emailNotValid, setEmailNotValid] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const defaultOrganizations: Organization[] = [];
    const [organizations, setOrganizations] = useState<Organization[]>(defaultOrganizations);

    const [selectedSchool, setSelectedSchool] = useState("");

    const [modalType, setModalType] = useState<'success' | 'info' | 'error'>('info');

    const [studentData, setStudentData] = useState<StudentData>({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        country_id: 0,
        role_id: 5,
        school_id: 0,
        rut: '',
    });

    useEffect(() => {
        const viewParam = async () => {
            const query = new URLSearchParams(window.location.search);
            if (query.has('school') && query.has('country') && query.has('school_id') && query.has('country_id')) {
                setLoadingURL(true);
    
                const school = query.get('school');
                const country = query.get('country');
                const school_id = query.get('school_id');
                const country_id = query.get('country_id');
    
                if(school != null && school_id != null){
                    setSchool(school);
                    setStudentData(prevState => ({
                        ...prevState,
                        school_id: parseInt(school_id),
                    }));
                }
                if(country != null && country_id != null){
                    setCountry(country);
                    setStudentData(prevState => ({
                        ...prevState,
                        country_id: parseInt(country_id),
                    }));
                }
            }
        }
        viewParam();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmptyInput(true);
        setEmailRegisteredError(false);
        setPhoneMaxError(false);
        setEmailNotValid(false);

        if(preSelected) {
            setStudentData({...studentData, school_id: preSelected.value });
        }

        if (
            studentData.name === "" ||
            studentData.lastname === "" ||
            studentData.email === "" ||
            studentData.school_id === 0 ||
            studentData.country_id === 0
        ) {
            setEmptyInput(true);
            return;
        } else if (!/@[^@]+$/.test(studentData.email)) {
            setEmailNotValid(true);
        }

        try {
            setLoading(true);
            setMessage("");

            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/lead/student`, studentData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(res.data.status === 'ok'){
                setPopUpSuccess(true);
                setLoading(false);
                setEmptyInput(false);
                setModalType("success");

                setStudentData(
                {
                    name: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    country_id: 0,
                    role_id: 5,
                    school_id: 0,
                    rut: '',
                });
            }else{
                setModalType("error");
                setMessage("Error de servidor.");
            }

        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data) {
                    setMessage("Ocurrió un error al procesar la solicitud.");
                    if (error.response.data.message === "El teléfono debe tener al menos 8 caracteres.") {
                        setPhoneMaxError(true);
                    } else if (error.response.data.message === "El correo electrónico ya ha sido registrado.") {
                        setEmailRegisteredError(true);
                    }
                } else {
                    setMessage("Ocurrió un error al procesar la solicitud.");
                }
            } else {
                setMessage("Ocurrió un error inesperado.");
            }
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={`${background ? "bg"+background : "bg-white"} ${notPadding ? "px-0" : "px-6" } py-8 ${not_rounded_top ? "rounded-b-xl" : "rounded-2xl"} flex-wrap w-full`}>

            {popUpSucess &&
                <>
                    <AlertModal
                        closeModal={() => setPopUpSuccess(false)}
                        type={modalType}
                        message={"Gracias por inscribirte y querer ser para ser parte de los clubes digitales stem de trcsports.com. Revisa tu correo para más información"}
                        reload={false}
                    />
                </>
            }

            {firstLoading && (
                <div className='h-screen w-screen top-0 left-0 fixed z-[99999] bg-select_purple opacity-[0.9] flex justify-center items-center flex-col'>
                    <b className='text-xl text-white'>Cargando</b>
                    <Icon icon="eos-icons:loading" className='text-white text-xl' />
                </div>
            )}

            {openPopUp && (
                <>
                    <SchoolsForm setSelectedOptionCountry={setSelectedOption} setState={setOpenPopUp} setInputValue={setInputValue} setSelectedSchool={setSelectedSchool} countryOptions={countryOptions} setPreSelected={setPreSelected} setStudentData={setStudentData} />
                    </>
            )}

            <Form logo={false} onSubmit={handleSubmit} message={message} loading={loading} buttonText='Registrarse' disabledButton={
            studentData.name === "" ||
            studentData.lastname === "" ||
            studentData.email === "" ||
            studentData.school_id === 0 ||
            studentData.country_id === 0}>
                <div className='flex flex-wrap lg:flex-nowrap gap-4 lg:gap-4 lg:justify-between'>
                    <InputForm
                    widthCSS="w-full lg:w-1/2"
                    loading={loading}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={studentData.name}
                    handleChange={handleChange}
                    labelText="Nombre *"
                    textWarning='Campo obligatorio.'
                    warningInput={emptyInput && studentData.name === "" ? true : false}
                    warningText={emptyInput && studentData.name === "" ? true : false}
                    ></InputForm>
                    
                    <InputForm
                    widthCSS="w-full lg:w-1/2"
                    loading={loading}
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    value={studentData.lastname}
                    handleChange={handleChange}
                    labelText="Apellido *"
                    textWarning='Campo obligatorio.'
                    warningInput={emptyInput && studentData.lastname === "" ? true : false}
                    warningText={emptyInput && studentData.lastname === "" ? true : false}
                    ></InputForm>
                </div>

                <InputForm
                    widthCSS="w-full"
                    loading={loading}
                    type="text"
                    name="email"
                    placeholder="tu@colegio.com"
                    value={studentData.email}
                    handleChange={handleChange}
                    labelText="Correo electrónico *"
                    textWarning='Campo obligatorio.'
                    warningInput={(emptyInput && studentData.email === "") || (emailRegisteredError) || (emailNotValid) ? true : false}
                    warningText={emptyInput && studentData.email === "" ? true : false}
                >
                    {emailRegisteredError && <span className='text-sm text-red-500'>El correo electrónico ya está en uso.</span>}
                    {emailNotValid && <span className='text-red-500 text-xs'>Formato de correo no válido.</span>}
                </InputForm>

                <InputForm
                    widthCSS="w-full"
                    loading={loading}
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={studentData.phone}
                    handleChange={handleChange}
                    labelText="Teléfono *"
                    textWarning='El número debe tener al menos 8 caracteres.'
                    warningInput={phoneMaxError ? true : false}
                    warningText={phoneMaxError ? true : false}
                >
                </InputForm>

                <div className='flex flex-col gap-1'>
                <label className="label-input font-medium">
                    País *
                </label>
                <input
                    type='text'
                    value={country || "País Invitado"}
                    className='shadow block w-full mb-2 px-3 py-2 border rounded-xl input-text-color'
                    disabled={true}
                />
                </div>

                <div className='flex flex-col gap-1'>
                <label className="label-input font-medium">
                    Establecimiento *
                </label>
                <input
                    type='text'
                    value={school || "Colegio Invitado"}
                    className='shadow block w-full mb-2 px-3 py-2 border rounded-xl input-text-color'
                    disabled={true}
                />
                </div>
            </Form>
        </div>
    );
};

export default InvitedForm;