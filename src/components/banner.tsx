import { Icons } from "./icons";

const Banner = () => {
    return (
        <div className="pt-10 container">
            <div className="rounded-md overflow-hidden max-w-5xl mx-auto relative">
                <Icons.ellipse className="w-full hidden md:block" />
                <Icons.innerEclipse className="w-full md:hidden" />
                <div className="absolute inset-x-0 md:inset-x-11 inset-y-1/4 px-4 z-[9999999] max-w-sm">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-2xl text-white">
                                Ready to Decipher Future?
                            </p>
                            <p className="font-bold text-2xl text-white">
                                Register for Innovate Now!
                            </p>
                        </div>
                        <button
                            className="px-6 py-3 rounded-[31px] text-accent bg-white font-semibold text-lg whitespace-nowrap"
                            onClick={() =>
                                window.open("https://tally.so/r/mKoBOV")
                            }
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
