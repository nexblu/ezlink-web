import IconGoogle from '../assets/image/google-icon.webp';
import EzLinkImage from '../assets/image/ez-link.png';
import { Helmet } from "react-helmet";
import { useState } from 'react';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = async () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="icon" type="image/svg+xml" href={EzLinkImage} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <style>
                    {
                        `
                            * {
                                font-family: 'Poppins', sans-serif;
                            }
                        `
                    }
                </style>
            </Helmet>
            <section className="h-screen flex items-center justify-center bg-[#CACACA]">
                <div className="bg-[#FFFFFF] w-[85%] h-[85%] rounded-lg text-center">
                    <div className="flex flex-wrap h-full">
                        <div className="hidden lg:flex w-full lg:w-1/2 p-4 items-center justify-center">
                            <img src={EzLinkImage} alt="EzLink" className='h-[80%] w-[80%] rounded-lg' />
                        </div>
                        <div className="w-full lg:w-1/2 pt-[5rem]">
                            <h1 className="text-[25px] font-bold">Welcome Back !</h1>
                            <div>
                                <p className="text-[12px] text-[#20201f]">Please Sign In To Continue</p>
                            </div>
                            <button className="border w-[35%] mx-auto rounded-md mt-[2rem]">
                                <span className="flex items-center justify-center m-1">
                                    <img src={IconGoogle} alt="Google Icon" className="w-[20px] h-[20px] inline-block mr-1" />
                                    <span>Google</span>
                                </span>
                            </button>
                            <br />
                            <br />
                            <div className="flex justify-center items-center">
                                <hr className="border-gray-400 w-[30%]" />
                                <p className="mx-3">OR</p>
                                <hr className="border-gray-400 w-[30%]" />
                            </div>
                            <form className="space-y-4 lg:ms-5 ms-5 me-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="block text-sm font-medium text-gray-700 text-left">Username</label>
                                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700 text-left">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisible ? "text" : "password"}
                                            id="exampleInputPassword1"
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {passwordVisible ? (
                                                <span className="material-symbols-outlined">
                                                    visibility_off
                                                </span>
                                            ) : (
                                                <span className="material-symbols-outlined">
                                                    visibility
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                                <div className="flex flex-row justify-end text-sm">
                                    <div className="me-1">{"Don't Have Account ?"}</div>
                                    <a href="http://localhost:5173/register" className="ms-1 text-blue-500">Register</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
