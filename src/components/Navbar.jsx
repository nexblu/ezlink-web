import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className="bg-gray-100 border-b border-gray-300 fixed top-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <a className="text-lg font-semibold" href="#">Ez Link</a>
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={toggleNavbar}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className="hidden md:flex space-x-4 items-center">
                        <a className="text-gray-700 hover:text-gray-900 font-bold" href="#">My URL</a>
                        <a className="text-gray-700 hover:text-gray-900 font-bold" href="#">History</a>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <a className="block text-gray-700 hover:text-gray-900 py-2" href="#">Home</a>
                        <a className="block text-gray-700 hover:text-gray-900 py-2" href="#">Features</a>
                        <a className="block text-gray-700 hover:text-gray-900 py-2" href="#">Pricing</a>
                        <a className="block text-gray-400 cursor-not-allowed py-2" href="#" aria-disabled="true">Disabled</a>
                    </div>
                )}
            </div>
        </nav>
        </>
    )
}

export default Navbar