import EzLinkImage from '../../../assets/image/ez-link.png'
import IconGoogle from '../../../assets/image/discord-icon.webp'
import IconDiscord from '../../../assets/image/google-icon.webp'
import Image from 'next/image'
import FormLogin from '@/components/FormLogin'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: 'Login',
}

const LoginPage = () => {
    return (
        <div>
            <section className="h-screen flex items-center justify-center w-full bg-[#CACACA]">
                <div className="bg-[#FFFFFF] w-[90%] h-[90%] rounded-lg text-center">
                    <div className="flex flex-wrap h-full">
                        <div className="hidden lg:flex w-full lg:w-1/2 p-4 items-center justify-center">
                            <Image src={EzLinkImage} alt="EzLink" className='h-[80%] w-[80%] rounded-lg' />
                        </div>
                        <div className="w-full lg:w-1/2 pt-[4rem]">
                            <h1 className="text-[25px] font-bold">Welcome Back !</h1>
                            <p className="text-[12px] text-[#20201f]">Please Sign In To Continue</p>
                            <div className="flex justify-center mb-3">
                                <div className="flex justify-between w-1/2">
                                    <button className="border w-full rounded-md mt-[2rem] mx-2" >
                                        <span className="flex items-center justify-center m-1">
                                            <Image src={IconGoogle} alt="Google Icon" className="w-[20px] h-[20px] inline-block mr-1" />
                                            <span>Google</span>
                                        </span>
                                    </button>
                                    <button className="border w-full rounded-md mt-[2rem] mx-2">
                                        <span className="flex items-center justify-center m-1">
                                            <Image src={IconDiscord} alt="Discord Icon" className="w-[20px] h-[20px] inline-block mr-1" />
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
        </div>
    )
}

export default LoginPage