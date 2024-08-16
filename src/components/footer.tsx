import { Icons } from "./icons";

const Footer = () => {
    return (
        <div className="w-full bg-black">
            <div className="flex flex-col-reverse p-6 gap-7 md:flex-row h-full items-center container justify-between">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-white">
                    <a>Join Community</a>
                    <a href="https://www.termsfeed.com/live/d619dcf5-694a-4c99-9881-8eb825a581bd" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <a href="https://docs.google.com/document/d/1D6FRBPa2N2wzt4KxcYH7kpILxByt__MNTSj6FuCdGnI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/company/vtion-media/" target="_blank" rel="noopener noreferrer">
                        <Icons.linkedin />
                    </a>
                    <a href="https://www.instagram.com/vtiondigital/" target="_blank" rel="noopener noreferrer">
                        <Icons.instagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
