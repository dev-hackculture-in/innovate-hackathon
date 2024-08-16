import { useCallback, useEffect, useState } from "react";
const TimeCountDown = () => {
    const [countDownTime, setCountDownTIme] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    const getTimeDifference = (countDownTime: number) => {
        const currentTime = new Date().getTime();
        const timeDiffrence = countDownTime - currentTime;
        const days =
            Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
                ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
                : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
        const hours =
            Math.floor(
                (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            ) >= 10
                ? Math.floor(
                      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                  )
                : `0${Math.floor(
                      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                  )}`;
        const minutes =
            Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
                ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
                : `0${Math.floor(
                      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
                  )}`;
        const seconds =
            Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
                ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
                : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
        if (timeDiffrence < 0) {
            setCountDownTIme({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            });
        } else {
            setCountDownTIme({
                days: days.toString(),
                hours: hours.toString(),
                minutes: minutes.toString(),
                seconds: seconds.toString(),
            });
        }
    };
    const startCountDown = useCallback(() => {
        const countDownDate = new Date(2024, 8, 30, 23, 59, 0, 0);
        setInterval(() => {
            getTimeDifference(countDownDate.getTime());
        }, 1000);
    }, []);
    useEffect(() => {
        startCountDown();
    }, [startCountDown]);

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
                <div className="flex justify-center gap-3 sm:gap-8">
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32  flex justify-between items-center bg-[#7c93fd] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#2f2dad]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                                {countDownTime?.days}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#2f2dad]"></div>
                        </div>
                        <span className="text-black text-xs sm:text-2xl text-center capitalize">
                            {countDownTime?.days == "1" ? "Day" : "Days"}
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32  flex justify-between items-center bg-[#7c93fd] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#2f2dad]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                                {countDownTime?.hours}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#2f2dad]"></div>
                        </div>
                        <span className="text-black text-xs sm:text-2xl text-center">
                            {countDownTime?.hours == "1" ? "Hour" : "Hours"}
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32  flex justify-between items-center bg-[#7c93fd] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#2f2dad]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                                {countDownTime?.minutes}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#2f2dad]"></div>
                        </div>
                        <span className="text-black text-xs sm:text-2xl text-center capitalize">
                            {countDownTime?.minutes == "1"
                                ? "Minute"
                                : "Minutes"}
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32  flex justify-between items-center bg-[#7c93fd] rounded-lg">
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#2f2dad]"></div>
                            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#ffffff]">
                                {countDownTime?.seconds}
                            </span>
                            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#2f2dad]"></div>
                        </div>
                        <span className="text-black text-xs sm:text-2xl text-center capitalize">
                            {countDownTime?.seconds == "1"
                                ? "Second"
                                : "Seconds"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TimeCountDown;
