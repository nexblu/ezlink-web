import EzLinkImage from '../assets/image/ez-link.png';
import { Helmet } from "react-helmet";
import IconGoogle from '../assets/image/google-icon.webp';
import IconDiscord from '../assets/image/discord-icon.webp';
import FormLogin from '../components/FormLogin';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
    useEffect(() => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
    }, []);

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/login/google';
    };

    const handleDiscordLogin = () => {
        window.location.href = 'http://localhost:5000/discord/oauth';
    }

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
            <section className="h-screen flex items-center justify-center w-full bg-[#CACACA]">
                <div className="bg-[#FFFFFF] w-[90%] h-[90%] rounded-lg text-center">
                    <div className="flex flex-wrap h-full">
                        <div className="hidden lg:flex w-full lg:w-1/2 p-4 items-center justify-center">
                            <img src={EzLinkImage} alt="EzLink" className='h-[80%] w-[80%] rounded-lg' />
                        </div>
                        <div className="w-full lg:w-1/2 pt-[4rem]">
                            <h1 className="text-[25px] font-bold">Welcome Back !</h1>
                            <p className="text-[12px] text-[#20201f]">Please Sign In To Continue</p>
                            <div className="flex justify-center mb-3">
                                <div className="flex justify-between w-1/2">
                                    <button className="border w-full rounded-md mt-[2rem] mx-2" onClick={handleGoogleLogin}>
                                        <span className="flex items-center justify-center m-1">
                                            <img src={IconGoogle} alt="Google Icon" className="w-[20px] h-[20px] inline-block mr-1" />
                                            <span>Google</span>
                                        </span>
                                    </button>
                                    <button className="border w-full rounded-md mt-[2rem] mx-2" onClick={handleDiscordLogin}>
                                        <span className="flex items-center justify-center m-1">
                                            <img src={IconDiscord} alt="Discord Icon" className="w-[20px] h-[20px] inline-block mr-1" />
                                            <span>Discord</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center m-[1rem]">
                                <hr className="border-gray-400 w-[30%]" />
                                <p className="mx-3">OR</p>
                                <hr className="border-gray-400 w-[30%]" />
                            </div>
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

export default Login;
