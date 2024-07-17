import NavBar from "@/components/NavBar"
import FormShortLink from "@/components/FormShortLink"

export const metadata = {
    title: 'Ez Link',
}

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className="bg-[#FFFFFF] max-h-screen flex items-center justify-center w-full pb-[5rem] pt-[5rem]">
                <div className="border bg-[#CACACA] flex flex-col w-[50%] rounded-lg">
                    <FormShortLink />
                </div>
            </div>
        </>
    )
}

export default HomePage