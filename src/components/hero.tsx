import HeroDesc from "./hero-desc";
import { Icons } from "./icons";
import TimeCountDown from "./time-countdown";

const Hero = () => {
    return (
        <div className="pt-10">
            <div>
                <div className="container flex flex-col gap-4 items-center justify-center md:items-start">
                    <div className="md:py-8">
                        <h1 className="font-bold text-4xl text-center md:text-left text-black ">
                            INNOVATE
                        </h1>
                        <h1 className="font-bold text-4xl text-center md:text-left text-black ">
                            AI-5G/6G HACKATHON
                        </h1>
                    </div>
                    <button
                        className="px-8 py-3 rounded-[31px] text-white bg-accent md:hidden font-semibold text-lg whitespace-nowrap"
                        onClick={() => window.open("https://tally.so/r/wk5OXd")}
                    >
                        Register Now
                    </button>
                </div>
                <div className="container py-4 flex flex-col-reverse md:flex-row md:gap-12 justify-between items-center md:items-start">
                    <div className="flex flex-col gap-12">
                        <HeroDesc />
                        <div
                            className="md:flex hidden cursor-pointer"
                            onClick={() =>
                                window.open("https://tally.so/r/wk5OXd")
                            }
                        >
                            <p className="font-bold text-2xl">Register Now</p>
                            <Icons.arrow className="" />
                        </div>
                    </div>
                    <div className="w-screen py-4 md:py-0 md:w-auto flex-grow">
                        <img
                            src="/banner.png"
                            className="w-full h-full md:rounded-md"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#eef4ff] p-4 md:p-8">
                <TimeCountDown />
                <div
                    className="md:hidden flex cursor-pointer justify-center"
                    onClick={() => window.open("https://tally.so/r/wk5OXd")}
                >
                    <p className="font-bold text-2xl">Register Now</p>
                    <Icons.arrow className="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
