"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Icon } from '@iconify/react';
import Select from 'react-select';

import SchoolsForm from '@/components/sections/contact/SchoolsForm';
import SearchableSelect from '@/components/sections/contact/SearchableSelect';
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
    country_id: number;
}

interface Props {
    background?: string;
    italic?: boolean;
    not_rounded_top?: boolean;
    notPadding?: boolean;
}

const ContactFormClub: React.FC<Props> = ({background, italic, not_rounded_top, notPadding}) => {
    const [copyMessage, setCopyMessage] = useState(false);
    const [reset, setReset] = useState(false);
    const [code, setCode] = useState("");
    const [popUpSucess, setPopUpSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [firstLoading, setFristLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [countryOptions, setCountryOptions] = useState<OptionType[]>([]);
    const [loadingURL, setLoadingURL] = useState(false);
    const [preSelected, setPreSelected] = useState<OptionType|null>(null);

    const [phoneMaxError, setPhoneMaxError] = useState(false);
    const [emailRegisteredError, setEmailRegisteredError] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);
    const [emailNotValid, setEmailNotValid] = useState(false);

    const defaultOrganizations: Organization[] = [];
    const [organizations, setOrganizations] = useState<Organization[]>(defaultOrganizations);

    const filteredOptions = organizations.map(org => ({ value: org.id, label: org.name, country_id: org.country_id }));

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
        const fetchCountries = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/countries`);
                const countries = response.data.countries.map((country: any) => ({
                    value: country.id,
                    label: country.name
                }));
                setCountryOptions(countries);
            } catch (error) {
                console.error("Error al traer escuelas.", error);
            }
        };
        fetchCountries();
    }, []);

    const handleChangeSelect = (selected: OptionType | null) => {
        setSelectedOption(selected);
        setStudentData({
            ...studentData,
            country_id: selected ? selected.value : 0,
        });
        setCountrySelected(selected ? selected.label : "");
        setCountryIdSelected(selected ? selected.value : 0);
    };


    const [schoolSelected, setSchoolSelected] = useState("");
    const [countrySelected, setCountrySelected] = useState("");
    const [countryIdSelected, setCountryIdSelected] = useState(0);
    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        setCopyMessage(false);
    }, [countryIdSelected]);

    const copyLinkShare = async () => {
        const school = schoolSelected;
        const school_id = studentData.school_id;
        const country = countrySelected;
        const country_id = studentData.country_id;

        const link = process.env.NEXT_PUBLIC_MEDIA_URL +
        'sumate?school=' + school + '&country=' + country + '&school_id=' + school_id + '&country_id=' + country_id;

        try {
            await navigator.clipboard.writeText(link);
            setCopyMessage(true);
        } catch (err) {
            console.error('Error al copiar el enlace: ', err);
            setMessage('Error al copiar el enlace.');
        }
    };
    
    useEffect(() => {
        if (copyMessage) {
        const timer = setTimeout(() => {
            setCopyMessage(false);
        }, 2000);
    
        return () => clearTimeout(timer);
        }
    }, [copyMessage]);

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

    const handleOrganizationChange = (selectedOption: { value: number; label: string } | null) => {
        setStudentData({
            ...studentData,
            school_id: selectedOption ? selectedOption.value : 0,
        });
        setSchoolSelected(selectedOption ? selectedOption.label : "");
        setSchoolSelected(selectedOption ? selectedOption.label : "");
        setPreSelected(selectedOption);
        setReset(true);
    };

    const customStyles = {
        control: (provided: any) => ({
            display: 'flex',
            alignItems: 'center',
            height: '3rem', // Equivalente a h-12 en Tailwind CSS
            borderRadius: '0.75rem', // Equivalente a rounded-xl en Tailwind CSS
            padding: '0 .7rem', // Equivalente a px-4 en Tailwind CSS
            backgroundColor: 'white',
        }),
        valueContainer: (provided: any) => ({
            ...provided,
            padding: '0',
        }),
        input: (provided: any) => ({
            ...provided,
            margin: '0',
            padding: '0',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (provided: any) => ({
            ...provided,
            padding: '0',
            color: '#2f3239', // Equivalente a text-gray-500 en Tailwind CSS
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: '#667085', // Equivalente a text-gray-500 en Tailwind CSS
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: '#667085', // Equivalente a text-gray-800 en Tailwind CSS
        }),
        menu: (provided: any) => ({
            ...provided,
            marginTop: '0',
            borderRadius: '0.75rem', // Equivalente a rounded-xl en Tailwind CSS
            boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)', // Equivalente a shadow en Tailwind CSS
        }),
        menuList: (provided: any) => ({
            ...provided,
            padding: '0',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#E2E8F0' : 'white', // Equivalente a bg-gray-100 en Tailwind CSS
            color: '#667085', // Equivalente a text-gray-800 en Tailwind CSS
            padding: '0.5rem 1rem', // Equivalente a py-2 px-4 en Tailwind CSS
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#EDF2F7', // Equivalente a hover:bg-gray-200 en Tailwind CSS
            },
        }),
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
                    <SchoolsForm
                    setSelectedOptionCountry={setSelectedOption}
                    setInputValue={setInputValue}
                    setState={setOpenPopUp} setSelectedSchool={setSelectedSchool} countryOptions={countryOptions} setPreSelected={setPreSelected} setStudentData={setStudentData} />
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
                    <label htmlFor="country" className="label-input font-medium">
                        País *
                    </label>
                    <Select
                        options={countryOptions}
                        value={selectedOption}
                        onChange={handleChangeSelect}
                        styles={customStyles}
                        isClearable={true}
                        placeholder="Selecciona un país"
                        classNamePrefix="react-select"
                        className={`shadow rounded-xl input-text-color border-[1px] ${emptyInput && studentData.country_id === 0 ? "border-red-500" : "border-gray-200"}`}
                    />
                    {emptyInput && studentData.country_id === 0 && <span className='text-red-500 text-xs'>Campo obligatorio.</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="organization" className="label-input font-medium">Establecimiento*</label>
                    <SearchableSelect
                        setCode={setCode}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        setPreSelected={setPreSelected}
                        options={filteredOptions}
                        onChange={handleOrganizationChange}
                        isLoading={loading}
                        preSelected={preSelected}
                        error={emptyInput && studentData.school_id === 0 ? true : false}
                        fromChile={studentData.country_id == 4 ? true : false}
                        countrySelected={studentData.country_id != 0 ? true : false}
                        countryIdSelected={countryIdSelected}
                        studentData={studentData}
                        setStudentData={setStudentData}
                    />
                    <div className='relative'>
                        {
                            studentData.school_id != 0 && <p
                            onClick={copyLinkShare}
                            className='underline text-xs text-blue-moderate cursor-pointer'>Copiar enlace para compartir este formulario con tus compañeros de colegio</p>
                        }
                        {
                            copyMessage && (
                                <div 
                                    className='border border-gray-300 bg-white text-purple_title p-2 absolute top-0 right-0 font-semibold rounded-lg shadow-md animate-fade-out cursor-default'
                                >
                                    Copiado!
                                </div>
                            )
                        }
                        <p className={`text-gray-800 font-light ${italic && "italic"} tracking-normal leading-none mt-4 md:mt-0`}>¿No encuentras tu establecimiento? Crea uno <button type="button" className='cursor-pointer my-2 text-pink-dark hover:text-pink-default italic hover:underline' onClick={() => { setOpenPopUp(true) }}>aquí.</button></p>
                    </div>
                    {
                    loadingURL && <div className="w-6 h-6 border-b-2 border-select_purple rounded-full animate-spin"></div>
                    }
                </div>
            </Form>
        </div>
    );
};

export default ContactFormClub;
