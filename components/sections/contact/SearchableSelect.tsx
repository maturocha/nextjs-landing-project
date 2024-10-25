import React, { Dispatch, SetStateAction, useState, useEffect, useCallback, useRef } from 'react';
import Spinner from '@/components/elements/ui/Spinner';
import axios from 'axios';
import debounce from 'lodash/debounce';

interface Option {
    value: number;
    label: string;
    code?: string;
    country_id: number;
}

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

interface SearchableSelectProps {
    options: Option[];
    onChange: (selectedOption: Option | null) => void;
    isLoading: boolean;
    placeholder?: string;
    defaultSelectedValue?: string;
    preSelected: OptionType | null;
    setPreSelected: Dispatch<SetStateAction<OptionType | null>>;
    setCode: Dispatch<SetStateAction<string>>;
    error: boolean;
    fromChile: boolean;
    countrySelected: boolean;
    countryIdSelected: number;
    studentData: StudentData;
    setStudentData: Dispatch<SetStateAction<StudentData>>;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
    options,
    onChange,
    isLoading,
    placeholder,
    defaultSelectedValue,
    setPreSelected,
    studentData,
    preSelected,
    setStudentData,
    countryIdSelected,
    error,
    countrySelected,
    fromChile,
    setCode,
    inputValue,
    setInputValue,
}) => {
    const [clicked, setClicked] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
    const [loading, setLoading] = useState(false);
    const [openSearcher, setOpenSearcher] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    const fetchSchools = useCallback(
        debounce(async (input: string) => {
            setLoading(true);
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/crm/schools?search=${input}&country_id=${countryIdSelected}`);
                const schools = response.data.schools.slice(0, 50).map((school: any) => ({
                    value: school.id,
                    label: school.name,
                    code: school.code,
                    country_id: school.country_id
                }));
                setFilteredOptions(schools);
            } catch (error) {
                console.error('Error fetching schools:', error);
                // Optional: Display error message to the user
            } finally {
                setLoading(false);
            }
        }, 500),
        [countryIdSelected] 
    );

    useEffect(() => {
        fetchSchools(inputValue || 'null');
    }, [inputValue]);

    useEffect(() => {
        if (inputValue === '') {
            setFilteredOptions(options);
        } else {
            fetchSchools(inputValue);
        }
    }, [inputValue, options]);

    useEffect(() => {
        if (defaultSelectedValue) {
            const defaultOption = filteredOptions.find(option => option.label === defaultSelectedValue);
            if (defaultOption) {
                onChange(defaultOption);
                setPreSelected(defaultOption);
            }
        }
    }, [defaultSelectedValue, onChange, filteredOptions]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpenSearcher(true);
        setInputValue(event.target.value);
    };

    const handleOptionClick = (option: Option) => {
        setInputValue(option.label);
        onChange(option);
        setPreSelected(option);
        setCode(option.code || '');
        setOpenSearcher(false);
    };

    const resetValue = () => {
        setInputValue('');
        setOpenSearcher(false);
        setStudentData({
            ...studentData,
            school_id: 0,
        });
    };

    useEffect(() => {
        const erase = ()=>{
            setStudentData({
                ...studentData,
                school_id: 0,
            });
        }
        countrySelected && setClicked(false);
        !countrySelected && setInputValue('');
        !countrySelected && erase();
    }, [countrySelected]);

    useEffect(()=> {
        const erase = ()=>{
            setStudentData({
                ...studentData,
                school_id: 0,
            });
        }
        erase();
        setInputValue('');
    }, [countryIdSelected])

    // Cerrar el dropdown si se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpenSearcher(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative' ref={containerRef}>
            {!countrySelected && (
                <div onClick={() => setClicked(true)} className='w-full top-0 left-0 h-full absolute'></div>
            )}

            <div className={`relative ${!countrySelected && "-z-10"} input-text-color cursor-default`}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder || 'Busca tu colegio por acá...'}
                    className='shadow block w-full mb-2 px-3 py-3 border rounded-xl input-text-color cursor-default'
                    disabled={loading || isLoading || !countrySelected}
                />

                {inputValue !== "" && openSearcher && (
                    <div className='flex flex-col w-fit min-w-full h-auto max-h-56 overflow-y-scroll absolute top-12 left-0 z-50 border-gray-600 shadow border-1px bg-white input-text-color'>
                        {filteredOptions.length > 0 ?
                        
                        filteredOptions.map(option => (
                                <div
                                    key={option.value}
                                    onClick={() => handleOptionClick(option)}
                                    className='pl-2 py-2 cursor-pointer hover:bg-gray-50'
                                >
                                    {option.label}
                                </div>
                        ))
                        :
                        <div className='pl-2 py-2'>No hay colegios creados.</div>
                        }
                    </div>
                )}

                {inputValue !== '' && (
                    <span
                        onClick={resetValue}
                        className="absolute right-4 top-[0.5rem] text-[1.4rem] font-bold text-gray-300 hover:text-gray-500 transition .2s"
                    >
                        &times;
                    </span>
                )}
            </div>

            {clicked && <span className='text-xs text-red-500'>Por favor, selecciona un país</span>}
            {error && <span className='text-red-500 text-xs'>Campo obligatorio.</span>}
        </div>
    );
};

export default SearchableSelect;
