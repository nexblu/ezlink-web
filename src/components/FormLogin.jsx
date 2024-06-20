import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const FormLogin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [loading, setLoading] = useState(false)

    const togglePasswordVisibility = async () => {
        setPasswordVisible(!passwordVisible);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [emailMessageError, setEmailMessageError] = useState('');
    const [passwordMessageError, setPasswordMessageError] = useState('');

    const navigate = useNavigate()

    const loginApi = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/ez-link/v1/user/login', { 'email': email, 'password': password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resp = response.data
            return { success: resp.success, data: resp.data }
        } catch (error) {
            return { success: error.response.data.success, data: error.response.data.data }
        }
    }

    const validateInput = async () => {
        let error = true
        if (!email || email.trim() === '') {
            setEmailError(true)
            setEmailMessageError('email is empety')
            error = false
        } else {
            setEmailError(false)
            setEmailMessageError('')
        }
        if (!password || password.trim() === '') {
            setPasswordError(true)
            setPasswordMessageError('password is empety')
            error = false
        } else {
            setPasswordError(false)
            setPasswordMessageError('')
        }
        return error
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const isValid = await validateInput()
        if (isValid) {
            const login = await loginApi()
            if (login.success) {
                Cookies.set('access_token', login.data.token.access_token);
                Cookies.set('refresh_token', login.data.token.refresh_token);
                navigate('/home')
            }
        }
        setLoading(false)
    }

    return (
        <>
            <form className="space-y-4 lg:ms-5 ms-5 me-5" onSubmit={loading ? null : handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputemail" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                    <input type="text" id="exampleInputemail" aria-describedby="emailHelp" className={`block w-full ${emailError ? 'h-[2rem]' : ''} px-3 py-2 border ${emailError === false ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    {emailError ? <p className='text-left text-red-600 sm:text-sm'>{emailMessageError}</p> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700 text-left">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="exampleInputPassword1"
                            className={`block w-full ${passwordError ? 'h-[2rem]' : ''} px-3 py-2 border ${passwordError === false ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} onChange={(e) => setPassword(e.target.value)} value={password}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? (
                                <span className={`material-symbols-outlined`}>
                                    visibility_off
                                </span>
                            ) : (
                                <span className={`material-symbols-outlined`}>
                                    visibility
                                </span>
                            )}
                        </button>
                    </div>
                    {passwordError ? <p className='text-left text-red-600 sm:text-sm'>{passwordMessageError}</p> : ''}
                </div>
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