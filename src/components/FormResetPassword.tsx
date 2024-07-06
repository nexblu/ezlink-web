"use client"
import React, { useState } from 'react';

const FormResetPassword = () => {
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')

    const [emailMessageError, setEmailMessageError] = useState('')

    return (
        <>
            <form className="w-full">
                <label htmlFor="exampleInputemail" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                <input type="text" id="exampleInputemail" aria-describedby="emailHelp" className={`block w-full ${emailMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!emailMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                {emailMessageError ? <p className='text-left text-red-600 sm:text-sm'>{emailMessageError}</p> : ''}
                <button type="submit" className="w-full mt-3 mb-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{loading ? 'Loading ...' : 'Reset Password'}</button>
                <div className="flex flex-row justify-end text-[12.5px]">
                    <div className="me-1">{"Don't Have Account ?"}</div>
                    <a href="http://localhost:3000/register" className="ms-1 text-blue-500">Register</a>
                </div>
            </form>
        </>
    )
}

export default FormResetPassword