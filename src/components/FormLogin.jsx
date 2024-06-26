import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const FormLogin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [loading, setLoading] = useState(false)

    const togglePasswordVisibility = async () => {
        setPasswordVisible(!passwordVisible);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailMessageError, setEmailMessageError] = useState('');
    const [passwordMessageError, setPasswordMessageError] = useState('');

    const navigate = useNavigate()

    const failedLogin = async (message) => {
        toast.error(message, {
            position: "bottom-right"
        });
    };

    const successSendEmail = async () => {
        toast.success('check your email for active account', {
            position: "bottom-right"
        });
    };

    const accountActiveApi = async () => {
        try {
            const response = await axios.post('http://localhost:5000/ez-link/v1/user/email-verify', { 'email': email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resp = response.data
            return { success: resp.success, resp: resp }
        } catch (error) {
            return { success: error.response.data.success, resp: error.response.data }
        }
    }

    const loginApi = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/ez-link/v1/auth/login', { 'email': email, 'password': password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resp = response.data
            return { success: resp.success, resp: resp }
        } catch (error) {
            return { success: error.response.data.success, resp: error.response.data }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const login = await loginApi()
        if (login.success) {
            Cookies.set('access_token', login.resp.data.token.access_token);
            Cookies.set('refresh_token', login.resp.data.token.refresh_token);
            navigate('/')
        } else {
            if (login.resp.data.user_active === false && login.data.data.unbanned_at === null && login.data.status_code === 400) {
                const result = await accountActiveApi()
                if (result.success) {
                    await successSendEmail()
                    setLoading(false)
                    return
                }
            } else {
                console.log('masuk')
                if (login.resp.errors) {
                    setEmailMessageError(login.resp.errors.email)
                    setPasswordMessageError(login.resp.errors.password)
                    await failedLogin(login.resp.message)
                } else {
                    if (login.resp.status_code === 404) {
                        setEmailMessageError('')
                        setPasswordMessageError('')
                        await failedLogin('invalid login')
                    }
                }
            }
        }
        setLoading(false)
    }

    return (
        <>
            <form className="space-y-4 lg:ms-5 ms-5 me-5" onSubmit={loading ? null : handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputemail" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                    <input type="text" id="exampleInputemail" aria-describedby="emailHelp" className={`block w-full ${emailMessageError ? 'h-[2rem]' : ''} px-3 py-2 border ${!emailMessageError ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    {emailMessageError ? <p className='text-left text-red-600 sm:text-sm'>{emailMessageError}</p> : ''}
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
                            {passwordVisible ? (
                                <span className={`material-symbols-outlined ${emailMessageError || passwordMessageError ? 'text-red-600' : ''}`}>
                                    visibility_off
                                </span>
                            ) : (
                                <span className={`material-symbols-outlined ${emailMessageError || passwordMessageError ? 'text-red-600' : ''}`}>
                                    visibility
                                </span>
                            )}
                        </button>
                    </div>
                    {passwordMessageError ? <p className='text-left text-red-600 sm:text-sm'>{passwordMessageError}</p> : ''}
                </div>
                <a href="http://localhost:5173/login" className="text-blue-500">
                    <p className='text-left pt-2'>Reset Password</p>
                </a>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{loading ? 'Loading ...' : 'Login'}</button>
                <div className="flex flex-row justify-end text-sm">
                    <div className="me-1">{"Don't Have Account ?"}</div>
                    <a href="http://localhost:5173/register" className="ms-1 text-blue-500">Register</a>
                </div>
            </form>
        </>
    )
}

export default FormLogin