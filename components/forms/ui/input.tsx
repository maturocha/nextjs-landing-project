import { FC, InputHTMLAttributes, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Tooltip from "@/components/forms/ui/Tooltip";
import { classNames } from "react-select/dist/declarations/src/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	className?: string;
	type: string;
	disabled: boolean;
	placeholder: string;
	value?: string | number;
	min?: number;
	tooltip_text?: string;
	required: boolean;
	pattern?: string;
	hasError?: boolean;
	error?: string;
	history?: string;
	title?: string;
	textColor?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: FC<InputProps> = ({
	name,
	label,
	type,
	className,
	disabled,
	placeholder,
	pattern,
	value,
	min,
	required,
	tooltip_text,
	hasError,
	error,
	history,
	title,
	textColor,
	onChange,
	...otherProps
}) => {
	const [passwordShown, setPasswordShown] = useState(false);

	return (
		<>
			{label && <label className='text-primary font-semibold'>{label}</label>}

			<div className='relative flex flex-col flex-wrap space-y-2 '>
				{title && (
					<h4
						className={`${
							hasError
								? "text-red-500"
								: textColor
								? "text-" + textColor
								: "text-white"
						} text-base `}>
						{title}
					</h4>
				)}
				<div className='relative flex flex-col flex-wrap space-y-2 overflow-x-visible'>
					<input
						type={passwordShown ? "text" : type}
						name={name}
						className={`${
							hasError
								? "border-red-500 text-red-500"
								: `border-gray-200 ${
										textColor ? "text-" + textColor : "text-black"
								  }`
						} ${className} border disabled:bg-gray-300 disabled:italic disabled:text-gray-600 w-full rounded-xl p-2 md:p-2 focus:outline-none placeholder-italic md:text-base text-center bg-white`}
						placeholder={`${placeholder} ${required ? "*" : ""}`}
						min={min ? min : ""}
						required={required}
						value={value}
						disabled={disabled}
						onChange={onChange}
						pattern={pattern}
					/>

					{type == "password" && (
						<div
							className='absolute flex flex-col items-center right-4 top-1 cursor-pointer'
							onClick={() => setPasswordShown(!passwordShown)}>
							{passwordShown ? (
								<FaRegEyeSlash className='w-6 h-6 text-gray-700' />
							) : (
								<FaRegEye className='w-6 h-6 text-gray-700' />
							)}
						</div>
					)}

					{tooltip_text && <Tooltip text={tooltip_text} />}
				</div>
				{history && (
					<span
						className={`italic ${
							hasError
								? "text-red-500"
								: textColor
								? "text-" + textColor
								: "text-white"
						} text-sm `}>
						{hasError ? error : history}
					</span>
				)}
			</div>
		</>
	);
};

export default InputForm;
