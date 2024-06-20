import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import FormShortLink from "../components/FormShortLink";
import EzLinkImage from '../assets/image/ez-link.png';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="icon" type="image/svg+xml" href={EzLinkImage} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <style>
                    {`
                        * {
                            font-family: 'Poppins', sans-serif;
                        }
                    `}
                </style>
            </Helmet>
            <Navbar />
            <section className="h-screen flex items-center justify-center bg-[#CACACA]">
                <FormShortLink />
            </section>
        </>
    );
}

export default Home;
