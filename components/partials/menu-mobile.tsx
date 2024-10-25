import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const MenuMobile = () => {
	const [showMenu, setShowMenu] = useState(false);

	const clickMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			{!showMenu && (
				<button
					className='p-2 lg:hidden'
					aria-label='Fallback Menu'
					onClick={() => clickMenu()}>
					<GiHamburgerMenu className='text-blue-purple w-8 h-8 cursor-pointer' />
				</button>
			)}

			{showMenu && (
				<div className='modal fixed w-full h-full top-0 left-0 bg-gray-100 z-10'>
					<div className='z-30 w-full h-full'>
						<div className='cursor-pointer text-right mt-4 mr-4 py-4'>
							<svg
								onClick={() => clickMenu()}
								className='fill-current text-blue-ligth'
								xmlns='http://www.w3.org/2000/svg'
								width='60'
								height='60'
								viewBox='0 0 18 18'>
								<path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
							</svg>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MenuMobile;
