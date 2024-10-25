import React, {ReactNode} from "react";

interface Props {
    children?: ReactNode;
    loading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    type: string;
    name: string;
    placeholder: string;
    labelText: string;
    value: string;
    textWarning: string;
    warningInput: boolean;
    warningText: boolean;
    widthCSS: string;
}

const InputForm: React.FC<Props> = ({loading, handleChange, type, name, placeholder, value, labelText, textWarning, warningInput, warningText, children, widthCSS}) => {
    return (
        <div className={`flex flex-col gap-1 ${widthCSS}`}>
            <label htmlFor={name} className="label-input font-medium">
                {labelText}
            </label>
            <input
                id={name}
                type={type}
                className={`rounded-xl px-3 py-2 text-base input-text-color border-gray-200 border w-full h-12 shadow ${
                    warningInput ? "border-red-500" : "border-gray-200"
                }`}
                name={name}
                placeholder={placeholder}
                disabled={loading}
                value={value}
                onChange={handleChange}
            />
            {warningText && (
                <span className="text-red-500 text-xs">{textWarning}</span>
            )}

            {children}
        </div>
    );
};

export default InputForm;
