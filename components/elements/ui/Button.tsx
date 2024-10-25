interface Props {
	type?: "submit" | "button" | "reset" | undefined;
	style?: "primary" | "secondary" | "tertiary" | "dark" | "white";
	size?: 'small' | 'normal' | 'large';
	className?: string;
	disabled?: boolean;
	children: React.ReactElement | React.ReactElement[] | string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
	style = "primary",
	className = "uppercase",
	size = 'normal',
	disabled = false,
	onClick,
	children,
}: Props) => {
	const classPrincipal = {
		primary: "bg-blue-purple text-white hover:bg-blue-lighter",
		secondary: "text-default border text-violet-default border-violet-default hover:bg-violet-default hover:text-white",
		tertiary: "text-white border bg-pink-dark border-pink-dark hover:bg-violet-default hover:border-violet-default hover:text-white",
		dark: "bg-violet-default text-white",
		white: "bg-white text-primary hover:bg-violet-default hover:text-white"
	};

	const fontSize = {
		small: 'text-sm',
		normal: 'text-base',
		large: 'text-xl'
	}

	return (
		<button
			onClick={onClick}
			className={`${disabled ? "bg-gray-200 text-gray-500" : classPrincipal[style]
				} py-2 px-4 rounded-xl ${fontSize[size]} ${className}`}
			disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
