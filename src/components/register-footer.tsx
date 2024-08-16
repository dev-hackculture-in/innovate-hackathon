import { MoveRightIcon } from "lucide-react";

const RegisterFooter = () => {
    return (
        <div className="w-full border-t-2 md:py-3 bg-white sticky bottom-0 z-[99999999]">
            <div className="md:flex h-full md:justify-end items-center md:px-10">
                <div className="flex flex-row items-center pb-4 md:pb-0 justify-around gap-2 md:gap-8 px-6 md:px-0 py-4 md:py-0">
                    <p className="text-red-500 text-xs md:text-base font-semibold text-center">
                        Registration{" "}
                        <span className="md:inline hidden">
                            & Idea submission
                        </span>{" "}
                        closes on Sepetember 30th
                    </p>
                    {/* <button
                        className="px-3 py-2 md:px-8 md:py-3 rounded-[31px] text-white bg-accent font-semibold text-sm  md:text-lg whitespace-nowrap"
                        onClick={() => window.open("https://tally.so/r/mKoBOV")}
                    >
                        Register Now
                    </button> */}
                    <div
                        className="flex cursor-pointer justify-center items-center gap-2 group"
                        onClick={() => window.open("https://tally.so/r/mKoBOV")}
                    >
                        <p className="font-bold text-md md:text-2xl whitespace-nowrap">
                            Register Now
                        </p>
                        <MoveRightIcon
                            className="text-accent group-hover:translate-x-1 transition-all"
                            strokeWidth={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterFooter;
