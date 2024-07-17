import Image from 'next/image';

const NavBar = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="relative pt-6 pb-16 sm:pb-24">
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#" className="flex items-center">
                                <p className='font-normal text-gray-500'>Ez Link</p>
                            </a>
                            <div className="flex items-center -mr-2 md:hidden">
                                <button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50" type="button" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:space-x-10 list-none">
                        <li>
                            <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" target="">{"My URL's"}</a>
                        </li>
                        <li>
                            <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" target="">History</a>
                        </li>
                    </div>
                    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                        <div className="inline-flex rounded-full shadow">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50">
                                Sign in
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;