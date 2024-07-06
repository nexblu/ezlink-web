"use client"
import { LiaLinkSolid } from "react-icons/lia";
import { PiMagicWandFill } from "react-icons/pi";

const FormShortLink = () => {
    return (
        <>
            <form className="space-y-4 mt-5 mb-5">
                <div className="mb-3">
                    <label htmlFor="tinyUrl" className="text-sm font-medium text-gray-700 flex flex-row justify-start items-center">
                        <LiaLinkSolid />
                        <p className="ms-1">Shorten a long URL</p>
                    </label>
                    <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tinyUrl" className="text-sm font-medium text-gray-700 flex flex-row justify-start items-center">
                        <PiMagicWandFill />
                        <p className="ms-1">Customize your link</p>
                    </label>
                    <div className="flex flex-row mb-3">
                        <div className="me-2">
                            <input
                                type="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="ms-2">
                            <input
                                type="password"
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