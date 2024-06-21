import { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const FormShortLink = () => {
    const [longUrl, setLongUrl] = useState('');
    const [aliases, setAliases] = useState(null)
    const [shortUrl, setShortURL] = useState('http://localhost:5000')

    const [isOpen, setIsOpen] = useState(false);

    const [resultShortURL, setResultShortURL] = useState(null)
    const [resultQrCode, setResultQrCode] = useState(null)
    const [resultUrlDownloadQrCode, setResultDownloadQrCode] = useState(null)


    const [success, setSuccess] = useState(false)

    const successAdding = async (message) => {
        toast.success(message, {
            position: "bottom-right"
        });
    };

    const failedAdding = async (message) => {
        toast.error(message, {
            position: "bottom-right"
        });
    };

    const downloadQrCode = async (e) => {
        e.preventDefault();
        window.location.href = resultUrlDownloadQrCode
    }

    const shortURLApi = async () => {
        try {
            const response = await axios.post('http://localhost:5000/ez-link/v1/short-url', { 'url': longUrl, 'aliases': aliases }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`,
                }
            });
            const resp = response.data
            return { success: resp.success, data: resp.data }
        } catch (error) {
            if (error.response.data.status_code === 401) {
                window.location.reload();
            }
            return { success: error.response.data.success, data: error.response.data }
        }
    }

    const toggleDropdown = async (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const shortURLV1 = async () => {
        setIsOpen(!isOpen);
        setShortURL('http://localhost:5000')
    }

    const shortAnother = async () => {
        setSuccess(false)
        setAliases(null)
        setLongUrl('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await shortURLApi()
        if (result.success) {
            setSuccess(true)
            setResultShortURL(result.data.short_url)
            setResultQrCode(result.data.image_url)
            setResultDownloadQrCode(result.data.download_image)
            await successAdding('Success Add Short URL')
        } else {
            await failedAdding(result.data.message)
        }
    };

    return (
        <>
            <form className={`h-[40%] me-5 ms-5 w-full lg:w-[50%] lg:h-[40%] md:w-full md:h-[40%] sm:h-[40%] sm:w-full md:me-5 md:ms-5 sm:me-5 sm:ms-5 bg-[#FFFFFF] rounded-lg ps-5 pe-5 pt-5 ${success ? 'pb-[290px]' : 'pb-5'}`} onSubmit={handleSubmit}>
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
                        disabled={success}
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
                    {!success ? <div className="flex flex-row justify-start text-sm items-center mt-1">
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
                            id="aliases"
                            value={aliases}
                            onChange={(e) => setAliases(e.target.value)}
                        />
                    </div> : <input
                        type="text"
                        className="h-[40px] block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="result"
                        value={resultShortURL}
                        disabled={success}
                    />}
                </div>
                {!success ? '' : <div className="flex flex-row mb-3">
                    <a href={resultShortURL} target="_blank">
                        <div className="btn h-[40px] btn-active me-1 btn-primary">
                            <span className="material-symbols-outlined">
                                open_in_new_down
                            </span>
                        </div>
                    </a>
                    <a href={resultQrCode} target="_blank">
                        <div className="btn h-[40px] btn-active me-1 ms-1 btn-primary">
                            <span className="material-symbols-outlined">
                                ios_share
                            </span>
                        </div>
                    </a>
                    <div className="btn h-[40px] btn-active me-1 ms-1 btn-primary" onClick={downloadQrCode}>
                        <span className="material-symbols-outlined">
                            download
                        </span>
                    </div>
                    <div className="btn h-[40px] btn-active me-1 ms-1 btn-primary">
                        <span className="material-symbols-outlined">
                            content_copy
                        </span>
                    </div>
                </div>}
                {!success ? <button
                    type="submit"
                    className="w-full h-[40px] inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Shorten URL
                </button> : <div className="flex flex-row mb-3">
                    <button className="btn h-[40px] btn-active me-2 btn-primary w-[50%]">
                        <p>My URLs</p>
                    </button>
                    <button className="btn h-[40px] btn-active btn-primary w-[49%]" onClick={shortAnother}>
                        <p>Shortern Another</p>
                    </button>
                </div>}
            </form>
        </>
    )
}

export default FormShortLink;
