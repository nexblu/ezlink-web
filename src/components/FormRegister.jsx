import { useState } from "react";

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

    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordPasswordError] = useState(false);

    const [emailMessageError, setEmailMessageError] = useState('');
    const [usernameMessageError, setUsernameMessageError] = useState('');
    const [passwordMessageError, setPasswordMessageError] = useState('');
    const [confirmPasswordMessageError, setConfirmPasswordMessageError] = useState('');

    const validateInput = async () => {
        let error = false
        if (!email || email.trim() === '') {
            setEmailError(true)
            setEmailMessageError('email is empety')
            error = true
        } else {
            setEmailError(false)
            setEmailMessageError('')
        }
        if (!username || username.trim() === '') {
            setUsernameError(true)
            setUsernameMessageError('username is empety')
            error = true
        } else {
            setUsernameError(false)
            setUsernameMessageError('')
        }
        if (!password || password.trim() === '') {
            setPasswordError(true)
            setPasswordMessageError('password is empety')
            error = true
        } else {
            setPasswordError(false)
            setPasswordMessageError('')
        }
        if (!confirmPassword || confirmPassword.trim() === '') {
            setConfirmPasswordPasswordError(true)
            setConfirmPasswordMessageError('password is empety')
            error = true
        } else {
            setConfirmPasswordPasswordError(false)
            setConfirmPasswordMessageError('')
        }
        return error
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        await validateInput()
        setLoading(false)
    }

    return (
        <>
            <form className="space-y-4 lg:ms-5 ms-5 me-5" onSubmit={loading ? null : handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputemail" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                    <input type="text" id="exampleInputemail" aria-describedby="emailHelp" className={`block w-full ${emailError ? 'h-[2rem]' : ''} px-3 py-2 border ${emailError === false ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    {emailError === true ? <p className='text-left text-red-600 sm:text-sm'>{emailMessageError}</p> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="block text-sm font-medium text-gray-700 text-left">Username</label>
                    <input type="text" id="exampleInputUsername" aria-describedby="usernameHelp" className={`block w-full ${usernameError ? 'h-[2rem]' : ''} px-3 py-2 border ${usernameError === false ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    {usernameError === true ? <p className='text-left text-red-600 sm:text-sm'>{usernameMessageError}</p> : ''}
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
                    {passwordError === true ? <p className='text-left text-red-600 sm:text-sm'>{passwordMessageError}</p> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputConfirmPassword1" className="block text-sm font-medium text-gray-700 text-left">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            id="exampleInputConfirmPassword1"
                            className={`block w-full ${confirmPasswordError ? 'h-[2rem]' : ''} px-3 py-2 border ${confirmPasswordError === false ? 'border-gray-300' : 'border-red-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                            onClick={toggleConfrmPasswordVisibility}
                        >
                            {confirmPasswordVisible ? (
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
                    {confirmPasswordError === true ? <p className='text-left text-red-600 sm:text-sm'>{confirmPasswordMessageError}</p> : ''}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{loading ? 'Loading ...' : 'Register'}</button>
                <div className="flex flex-row justify-end text-sm">
                    <div className="me-1">{"Have Account ?"}</div>
                    <a href="http://localhost:5173/login" className="ms-1 text-blue-500">Login</a>
                </div>
            </form>
        </>
    )
}

export default FormRegister