import { FC, ChangeEvent } from "react";
import Select from "react-select";

type OptionType = { label: string; value: string; };
type OptionsType = Array<OptionType>;

type GroupType = {
	string: any; // group label
	options: OptionsType;
};

interface SelectProps {
	name: string;
	label?: string;
	placeholder: string;
	options: OptionsType;
	disabled: boolean;
	value?: {};
	required: boolean;
	hasError?: boolean;
	error?: string;
	onChange: (e: any) => void;
}

const SelectForm: FC<SelectProps> = ({
	name,
	label,
	options,
	disabled,
	value,
	required,
	hasError,
	error,
	placeholder = "Seleccione...",
	onChange,
	...otherProps
}) => {
	const customStyles = {
		option: (provided: any, state: { isSelected: any; }) => ({
			...provided,
			borderBottom: "1px dotted pink",
			color: state.isSelected ? "white" : "black",
			padding: 12,
		}),
		// container:  base => ({
		//   ...base,
		//   background: "gray",
		//   padding: 0,
		//   margin: 0
		// }),
		control: (base: any, state: { isFocused: any; }) => ({
			...base,
			background: "#f5f5f5",
			// match with the menu
			borderRadius: state.isFocused ? "3px" : 3,
			// Overwrittes the different states of border
			borderColor: "transparent",
			// Removes weird border around container
			boxShadow: state.isFocused ? null : null,
			"&:hover": {
				// Overwrittes the different states of border
				borderColor: state.isFocused ? null : null,
			},
		}),
		placeholder: (base: any, state: any) => ({
			...base,
			fontStyle: "italic",
		}),
		menu: (base: any) => ({
			...base,
			// override border radius to match the box
			borderRadius: 0,
			// kill the gap
			marginTop: 0,
		}),
		menuList: (base: any) => ({
			...base,
			// kill the white space on first and last option
			padding: 0,
		}),
	};

	return (
		<>
			{label && <label className='text-primary font-semibold'>{label}</label>}
			<Select
				name={name}
				styles={customStyles}
				className='bg-gray-100 w-full rounded-full h-14 p-2 md:p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-italic md:text-base text-center'
				value={value}
				options={options}
				onChange={(e) => onChange(e)}
				placeholder={`${placeholder} ${required ? "*" : ""}`}
			/>
			{hasError && <small className='text-red-500'>{`${error}.`}</small>}
		</>
	);
};

export default SelectForm;
