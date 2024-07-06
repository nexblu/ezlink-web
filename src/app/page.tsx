import NavBar from "@/components/NavBar"
import FormShortLink from "@/components/FormShortLink"

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className="bg-[#CACACA] max-h-screen flex items-center justify-center w-full pb-[5rem] pt-[5rem]">
                <div className="border bg-[#FFFFFF] flex flex-col items-center justify-center w-[30%] rounded-lg">
                    <FormShortLink />
                </div>
            </div>
        </>
    )
}

export default HomePage