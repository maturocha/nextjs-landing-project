import Link from "next/link";

const PreFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			{/* <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex mb-6 md:mb-0 justify-center md:justify-start w-full items-center">
        <p className="dark:text-gray-400 leading-relaxed">
          &copy; {currentYear}{" "} TRC Sports
        </p>
      </div>
      <div className="flex w-full justify-center md:justify-end md:w-80 items-center">
        <div className="dark:text-gray-400 font-semibold">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://www.instagram.com/trcsports/" target="_blank" 
              className="text-primary rounded-full hover:text-white hover:bg-primary h-6 w-6">
              <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/trc-sports/" target="_blank" 
              className="text-primary rounded-full hover:text-white hover:bg-primary h-6 w-6">
              
              <svg aria-hidden="true" fill="currentColor" viewBox="0 0 512 512" >
                <path fillRule="evenodd" d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
			<div className='py-6 px-8 bg-blue-dark flex justify-end'>
				<p className='text-xl text-white'>&copy; {currentYear} TRC Resplend</p>
			</div>
		</footer>
	);
};

export default PreFooter;
