import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Spinner from '@/components/elements/ui/Spinner';
import axios from 'axios';
import logo from 'public/logo.svg';
import Select from 'react-select';

interface OptionType {
    value: number;
    label: string;
}

interface SchoolData {
    name: string;
    region: string;
    municipality: string;
    country_id: number | null;
}

interface Organization {
    id: number;
    name: string;
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

interface Props {
    setState: Dispatch<SetStateAction<boolean>>;
    setOrganizations: Dispatch<SetStateAction<Organization[]>>;
    setSelectedSchool: Dispatch<SetStateAction<string | "">>;
    countryOptions: OptionType[];
    setPreSelected: Dispatch<SetStateAction<OptionType | null>>;
    setStudentData: Dispatch<SetStateAction<StudentData>>;
}

const SeacherSchoolsForm: React.FC<Props> = ({
    setState,
    setOrganizations,
    setSelectedSchool,
    countryOptions,
    setPreSelected,
    setStudentData
}) => {
    const [school, setSchool] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [schoolData, setSchoolData] = useState<SchoolData>({
        name: '',
        region: '',
        municipality: '',
        country_id: null,
    });
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [emptyInput, setEmptyInput] = useState(false);

    const handleChangeSelect = (selected: OptionType | null) => {
        setSelectedOption(selected);
        setSchoolData(prevData => ({
            ...prevData,
            country_id: selected ? selected.value : null,
        }));
    };

    const handleClick = () => {
        setState(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (isFormInvalid()) {
            setEmptyInput(true);
            return;
        }

        setLoading(true);

        try {
            setEmptyInput(false);
            const { data, status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/crm/schools`, schoolData);

            if (status === 200 && data.school) {
                handleSuccess(data.school);
            } else {
                setMessage("Error al crear la escuela.");
            }
        } catch (error) {
            setMessage("Ha ocurrido un error al crear la escuela.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const isFormInvalid = () => {
        return !schoolData.name || !schoolData.region || !schoolData.municipality || schoolData.country_id === null;
    };

    const handleSuccess = (newSchool: any) => {
        setPreSelected({
            value: newSchool.id,
            label: newSchool.name,
        });
        setStudentData({
            name: '',
            lastname: '',
            email: '',
            phone: '',
            country_id: 0,
            role_id: 5,
            school_id: newSchool.id,
            rut: '',
        });
        setMessage("Escuela creada.");
        setTimeout(() => setState(false), 2000); // Esperar 2 segundos antes de cerrar
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSchoolData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const customStyles = {
        control: (provided: any) => ({
            display: 'flex',
            alignItems: 'center',
            height: '3rem',
            borderRadius: '0.75rem',
            padding: '0 .5rem',
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
            color: '#667085',
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: '#667085',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: '#2f3239',
        }),
        menu: (provided: any) => ({
            ...provided,
            marginTop: '0',
            borderRadius: '0.75rem',
            boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
        }),
        menuList: (provided: any) => ({
            ...provided,
            padding: '0',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#E2E8F0' : 'white',
            color: '#2f3239',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#EDF2F7',
            },
        }),
    };

    return ReactDOM.createPortal (
        <>
        <div className='w-screen h-screen top-0 left-0 fixed bg-gray-600/70 z-[999]'></div>
        <form
            className="rounded-xl flex flex-col gap-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            p-8 w-[95%] md:w-5/6 lg:w-2/3 xl:w-1/3 overflow-y-auto
            lg:max-h-[95%] z-[9999] bg-white"
            onSubmit={handleSubmit}
        >
            <div className="flex w-full justify-center items-center">
                <Image src={logo} alt="Logo" className="w-48 mb-4" />
            </div>

            <div className='flex w-full justify-center items-center'>
                <div onClick={handleClick} className='cursor-pointer absolute top-4 right-6 text-4xl'>
                    &times;
                </div>
            </div>

            

            <button
                type="submit"
                className={`mt-4 h-12 ${loading || school == ""  ? "bg-gray-200" : "bg-purple hover:bg-violet-ligth"} py-3 rounded-xl text-white`}
                disabled={loading || school == ""}
            >
                {loading ? <Spinner /> : 'Seleccionar establecimiento'}
            </button>

            {message && (
                <div className={`w-full relative text-center p-2 rounded-md ${message === "Escuela creada." ? "text-blue-purple bg-green-default/40" : "text-red-700 bg-red-200"}`}>
                    <b className='absolute top-0 right-2 text-black cursor-pointer' onClick={() => setMessage(null)}>&times;</b>
                    <span>{message}</span>
                </div>
            )}
        </form>
        </>, document.body);
};

const FormInput: React.FC<{
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
    loading: boolean;
}> = ({ label, name, value, placeholder, onChange, isError, loading }) => (
    <div className='flex flex-col gap-1'>
        <label htmlFor={name} className="font-medium">{label}</label>
        <input
            id={name}
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={loading}
            className={`w-full h-12 px-4 rounded-xl border-[1px] ${isError ? 'border-red-500' : 'border-gray-200'} bg-white focus:outline-none`}
        />
        {isError && <span className='text-red-500 text-xs'>Campo obligatorio.</span>}
    </div>
);

export default SeacherSchoolsForm;
