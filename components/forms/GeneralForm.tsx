interface Props {
	icon?: React.ReactElement;
	className: string;
	error?: string;
	children: React.ReactElement | React.ReactElement[];
	title?: string;
	titleClassName?: string;
	subtitle: string;
	onSubmit: (e: React.FormEvent) => void;
}

const GeneralForm = ({
	className,
	error,
	icon,
	children,
	title,
	titleClassName,
	subtitle,
	onSubmit,
}: Props) => {
	return (
		<form onSubmit={onSubmit} className={className}>
			{icon && icon}
			<h2
				className={
					"font-semibold text-2xl md:text-3xl leading-tight text-center "
				}>
				{title}
			</h2>
			{subtitle && (
				<p className='text-center text-base text-black-700 mb-4'>{subtitle}</p>
			)}
			{error && (
				<div className='flex justify-center items-center m-1 mb-4 font-medium py-1 px-2 bg-white rounded-full text-red-700 border border-red-300 '>
					<div slot='avatar'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='100%'
							height='100%'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='feather feather-alert-octagon w-5 h-5 mx-2'>
							<polygon points='7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'></polygon>
							<line x1='12' y1='8' x2='12' y2='12'></line>
							<line x1='12' y1='16' x2='12.01' y2='16'></line>
						</svg>
					</div>
					<div className='text-base font-normal  max-w-full flex-initial'>
						{error}{" "}
					</div>
					<div className='flex flex-auto flex-row-reverse'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='100%'
								height='100%'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2'>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</div>
					</div>
				</div>
			)}

			{children}
		</form>
	);
};

export default GeneralForm;
