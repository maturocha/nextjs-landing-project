interface Props {
	text: string;
	disabled?: boolean;
	bgColor?: string;
	textColor?: string;
}

const ButtonSubmit = ({ text, disabled, bgColor, textColor }: Props) => {
	return (
		<button
			type="submit"
			className={`${
				disabled ? 'bg-gray-300' : bgColor ? 'bg-' + bgColor : 'bg-white'
			} py-1 md:py-2 ${
				textColor ? 'text-' + textColor : 'text-primary'
			} uppercase rounded-full w-max mx-auto px-4 md:px-8 `}
			disabled={disabled}>
			{text}
		</button>
	);
};

export default ButtonSubmit;
