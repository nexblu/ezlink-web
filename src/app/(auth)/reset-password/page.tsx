import Image from "next/image"
import EzLinkImage from '../../../assets/image/ez-link.png'
import FormResetPassword from '@/components/FormResetPassword'
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: 'Reset Password',
}

const ResetPasswordPage = () => {
    return (
        <>
            <section className="h-screen flex items-center justify-center bg-[#CACACA]">
                <div className="bg-[#FFFFFF] w-[80%] h-[80%] rounded-lg text-center">
                    <div className="flex flex-wrap h-full">
                        <div className="hidden lg:flex w-full lg:w-1/2 p-4 items-center justify-center">
                            <Image src={EzLinkImage} alt="EZ-Link" className="h-[80%] w-[80%] rounded-lg"></Image>
                        </div>
                        <div className="w-full lg:w-1/2 pt-[4rem] flex flex-col items-center justify-center pe-5 ps-5">
                            <h1 className="text-[25px] font-bold">Welcome Back !</h1>
                            <p className="text-[12px] text-[#20201f]">Please Enter Your Email</p>
                            <FormResetPassword />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPasswordPage