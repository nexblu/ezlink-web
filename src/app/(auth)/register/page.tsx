import Image from "next/image"
import EzLinkImage from '../../../assets/image/ez-link.png'
import FormRegister from "@/components/FormRegister"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: 'Register',
}

const RegisterPage = () => {
    return (
        <div>
            <section className="h-screen flex items-center justify-center bg-[#CACACA]">
                <div className="bg-[#FFFFFF] w-[95%] h-[95%] rounded-lg text-center">
                    <div className="flex flex-wrap h-full">
                        <div className="hidden lg:flex w-full lg:w-1/2 p-4 items-center justify-center">
                            <Image src={EzLinkImage} alt="EZ-Link" className="h-[80%] w-[80%] rounded-lg"></Image>
                        </div>
                        <div className="w-full lg:w-1/2 pt-[4rem]">
                            <h1 className="text-[25px] font-bold">Welcome Back !</h1>
                            <p className="text-[12px] text-[#20201f]">Please Register To Continue</p>
                            <FormRegister />
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    )
}

export default RegisterPage