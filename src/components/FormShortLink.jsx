import { useState } from "react";

const FormShortLink = () => {
    const [longUrl, setLongUrl] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [shortUrl, setShortURL] = useState('http://localhost:5000')

    const toggleDropdown = async (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const shortURLV1 = async () => {
        setIsOpen(!isOpen);
        setShortURL('http://localhost:5000')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Long URL:', longUrl);
    };

    return (
        <>
            <form className="lg:w-[50%] lg:h-[40%] md:w-full sm:w-full md:me-5 md:ms-5 sm:me-5 sm:ms-5 bg-[#FFFFFF] rounded-lg p-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="longUrl" className="block text-sm font-medium text-gray-700">
                        <div className="flex flex-row justify-start text-sm">
                            <span className="material-symbols-outlined">
                                link
                            </span>
                            <p className="ms-1">Shorten a long URL</p>
                        </div>
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="longUrl"
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tinyUrl" className="block text-sm font-medium text-gray-700">
                        <div className="flex flex-row justify-start text-sm">
                            <span className="material-symbols-outlined">
                                point_scan
                            </span>
                            <p className="ms-1">Customize your link</p>
                        </div>
                    </label>
                    <div className="flex flex-row justify-start text-sm items-center mt-1">
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-[40px] rounded-md py-2 px-4 inline-flex items-center border border-gray-300 w-full"
                            >
                                http://localhost:5000
                                <span className="material-symbols-outlined relative left-3">
                                    {!isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                                </span>
                            </button>
                            {isOpen && (
                                <ul className="absolute text-gray-700 pt-1 bg-white shadow-lg rounded-lg mt-1 w-full">
                                    <li>
                                        <button className="block px-4 py-2 text-sm" onClick={shortURLV1}>
                                            http://localhost:5000
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <input
                            type="text"
                            className="h-[40px] ml-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="longUrl"
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full h-[40px] inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Shorten URL
                </button>
            </form>
        </>
    )
}

export default FormShortLink;
