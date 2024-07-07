"use client"
import { LiaLinkSolid } from "react-icons/lia";
import { PiMagicWandFill } from "react-icons/pi";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FormShortLink = () => {
    const [longUrl, setLongUrl] = useState('');
    const [aliases, setAliases] = useState(null)
    const [shortUrl, setShortURL] = useState('http://localhost:5000')

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const shortURLV1 = async (): Promise<void> => {
        setIsOpen(!isOpen);
        setShortURL('http://localhost:5000')
    }

    return (
        <>
            <form className="space-y-4 mt-5 mb-5 w-full ps-2 pe-2 bg-[#CACACA]">
                <div className="mb-3">
                    <label htmlFor="tinyUrl" className="text-sm font-medium text-gray-700 flex flex-row justify-start items-center">
                        <LiaLinkSolid />
                        <p className="ms-1">Shorten a long URL</p>
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3 w-full">
                    <label htmlFor="tinyUrl" className="text-sm font-medium text-gray-700 flex flex-row justify-start items-center">
                        <PiMagicWandFill />
                        <p className="ms-1">Customize your link</p>
                    </label>
                    <div className="flex mt-1 w-full">
                        <div className="relative flex items-center mr-1 w-1/2">
                            <button
                                onClick={toggleDropdown}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white overflow-hidden"
                            >
                                <div className="flex justify-between w-full">
                                    <p className="mr-2">{shortUrl}</p>
                                    <IoIosArrowDown className="self-center" />
                                </div>
                            </button>
                            {isOpen && (
                                <ul className="absolute z-10 text-gray-700 pt-1 bg-white shadow-lg rounded-lg mt-1 w-full border border-gray-300 top-[calc(100%+0.125rem)]">
                                    <li>
                                        <button className="block px-4 py-2 text-sm w-full text-left" onClick={shortURLV1}>
                                            http://localhost:5000
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="ml-1 w-1/2">
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="exampleInputPassword1"
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                >
                    Shorten URL
                </button>
            </form>
        </>
    )
}

export default FormShortLink