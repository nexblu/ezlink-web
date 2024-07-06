"use client"
import React, { useState } from "react"
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const FormRegister = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const [loading, setLoading] = useState(false)

    const togglePasswordVisibility = async () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfrmPasswordVisibility = async () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailMessageError, setEmailMessageError] = useState('');
    const [usernameMessageError, setUsernameMessageError] = useState('');
    const [passwordMessageError, setPasswordMessageError] = useState('');
    const [confirmPasswordMessageError, setConfirmPasswordMessageError] = useState('');

    const clearForm = async () => {
        setEmail('')
        setEmailMessageError('')
        setUsername('')
        setUsernameMessageError('')
        setPassword('')
        setPasswordMessageError('')
        setConfirmPassword('')
        setConfirmPasswordMessageError('')
    }

    const successRegister = async () => {
        toast.success('check your email for active account', {
            position: "bottom-right"
        });
    };

    const failedRegister = async (message: string): Promise<void> => {
        toast.error(message, {
            position: "bottom-right"
        });
    };

    const accountActiveApi = async (): Promise<{ success: boolean, resp: any }> => {
        try {
            const response = await axios.post('http://localhost:5000/ez-link/v1/auth/email-verify', { 'email': email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resp = response.data;
            return { success: resp.success, resp: resp.data };
        } catch (error: any) {
            return { success: error.response?.data.success, resp: error.response?.data };
        }
    };

    const registerApi = async (): Promise<{ success: boolean, resp: any }> => {
        try {
            const response = await axios.post('http://localhost:5000/ez-link/v1/auth/register', { 'email': email, 'username': username, 'password': password, 'confirm_password': confirmPassword }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resp = response.data;
            return { success: resp.success, resp: resp };
        } catch (error: any) {
            return { success: error.response.data.success, resp: error.response.data };
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const resultRegisterApi = await registerApi()
        if (resultRegisterApi.success) {
            const resultAccountActive = await accountActiveApi()
            if (resultAccountActive.success) {
                await successRegister()
                await clearForm()
                setLoading(false)
                return
            } else {
                await failedRegister('failed active account')
                setLoading(false)
                return
            }
        } else {
            if (resultRegisterApi.success === false && resultRegisterApi.resp.status_code === 400) {
                if (resultRegisterApi.resp.errors) {
                    setEmailMessageError(resultRegisterApi.resp.errors.email)
                    setPasswordMessageError(resultRegisterApi.resp.errors.password)
                    setConfirmPasswordMessageError(resultRegisterApi.resp.errors.confirm_password)
                    setUsernameMessageError(resultRegisterApi.resp.errors.username)
                    await failedRegister(resultRegisterApi.resp.message)
                    setLoading(false)
                    return
                }
            }
        }
        await failedRegister('failed register')
        setLoading(false)
    }

    return (
        <>
            <form onSubmit={loading ? () => { } : handleSubmit}>
                <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="flex flex-col mb-3">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 text-left">Username</label>
                        <input type="text" id="username" className={`block w-full ${usernameMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!usernameMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} aria-label="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                        {usernameMessageError ? <p className='text-left text-red-600 sm:text-sm'>{usernameMessageError}</p> : ''}
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                        <input type="text" id="email" className={`block w-full ${emailMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!emailMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} aria-label="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        {emailMessageError ? <p className='text-left text-red-600 sm:text-sm'>{emailMessageError}</p> : ''}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1">
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">Password</label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="exampleInputPassword1"
                                className={`block w-full ${passwordMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!passwordMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} onChange={(e) => setPassword(e.target.value)} value={password}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {!passwordVisible ? (
                                    <IoEyeOutline className={passwordMessageError ? `text-red-600` : ''} />
                                ) : (
                                    <IoEyeOffOutline className={passwordMessageError ? `text-red-600` : ''} />
                                )}
                            </button>
                        </div>
                        {passwordMessageError ? <p className='text-left text-red-600 sm:text-sm'>{passwordMessageError}</p> : ''}
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 text-left">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                id="exampleInputConfirmPassword1"
                                className={`block w-full ${passwordMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!passwordMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                onClick={toggleConfrmPasswordVisibility}
                            >
                                {!confirmPasswordVisible ? (
                                    <IoEyeOutline className={passwordMessageError ? `text-red-600` : ''} />
                                ) : (
                                    <IoEyeOffOutline className={passwordMessageError ? `text-red-600` : ''} />
                                )}
                            </button>
                        </div>
                        {confirmPasswordMessageError ? <p className='text-left text-red-600 sm:text-sm'>{confirmPasswordMessageError}</p> : ''}
                    </div>
                </div>
                <button type="submit" className="w-full mt-3 mb-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{loading ? 'Loading ...' : 'Register'}</button>
                <div className="flex flex-row justify-end text-[12.5px]">
                    <div className="me-1">{"Have Account ?"}</div>
                    <a href="http://localhost:3000/login" className="ms-1 text-blue-500">Login</a>
                </div>
            </form>
        </>
    )
}

export default FormRegister