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
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                return { success: error.response.data.success, resp: error.response.data };
            } else {
                throw error;
            }
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
        <div>
            <form className="space-y-4 lg:ms-5 ms-5 me-5" onSubmit={loading ? undefined : handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputemail" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                    <input type="text" id="exampleInputemail" aria-describedby="emailHelp" className={`block w-full ${emailMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!emailMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    {emailMessageError ? <p className='text-left text-red-600 sm:text-sm'>{emailMessageError}</p> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="block text-sm font-medium text-gray-700 text-left">Username</label>
                    <input type="text" id="exampleInputUsername" aria-describedby="usernameHelp" className={`block w-full ${usernameMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!usernameMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    {usernameMessageError ? <p className='text-left text-red-600 sm:text-sm'>{usernameMessageError}</p> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700 text-left">
                        Password
                    </label>
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
                                <IoEyeOutline className={passwordMessageError ? `text-red-600` : ''}/>
                            ) : (
                                <IoEyeOffOutline className={passwordMessageError ? `text-red-600` : ''}/>
                            )}
                        </button>
                    </div>
                    {passwordMessageError ? <p className='text-left text-red-600 sm:text-sm'>{passwordMessageError}</p> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputConfirmPassword1" className="block text-sm font-medium text-gray-700 text-left">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            id="exampleInputConfirmPassword1"
                            className={`block w-full ${confirmPasswordMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!confirmPasswordMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                            onClick={toggleConfrmPasswordVisibility}
                        >
                            {!confirmPasswordVisible ? (
                                <IoEyeOutline className={confirmPasswordMessageError ? `text-red-600` : ''}/>
                            ) : (
                                <IoEyeOffOutline className={confirmPasswordMessageError ? `text-red-600` : ''}/>
                            )}
                        </button>
                    </div>
                    {confirmPasswordMessageError ? <p className='text-left text-red-600 sm:text-sm'>{confirmPasswordMessageError}</p> : ''}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{loading ? 'Loading ...' : 'Register'}</button>
                <div className="flex flex-row justify-end text-sm">
                    <div className="me-1">{"Have Account ?"}</div>
                    <a href="http://localhost:3000/login" className="ms-1 text-blue-500">Login</a>
                </div>
            </form>
        </div>
    )
}

export default FormRegister