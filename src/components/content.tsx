import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { useState } from "react";

const Content = () => {
    const [pathname, setPathname] = useState("about");
    const routes = [
        {
            href: "about",
            label: "About DOT & IMC",
            active: pathname === "about",
        },
        {
            href: "challenge",
            label: "The Challenge",
            active: pathname === "challenge",
        },
        {
            href: "technologies",
            label: "Technologies",
            active: pathname === "technologies",
        },
        {
            href: "prizes",
            label: "Prizes",
            active: pathname === "prizes",
        },
        {
            href: "apply",
            label: "Who Should Apply?",
            active: pathname === "apply",
        },
        {
            href: "event",
            label: "Event Timelines",
            active: pathname === "event",
        },
    ];

    return (
        <div className="relative">
            <div className="bg-[#edf3ff] md:rounded-md">
                <div className="container sticky z-10 top-0 h-16 bg-[#061844] border-b flex items-center md:justify-center gap-x-12 overflow-x-auto whitespace-nowrap min-w-full">
                    {routes.map((route) => (
                        <p
                            key={route.href}
                            className={cn(
                                "flex-shrink-0 cursor-pointer font-bold text-white tracking-wide h-full flex items-center hover:text-[#c4d6fe] hover:border-b-4 hover:border-[#c4d6fe]",
                                {
                                    "text-[#c4d6fe] border-b-4 border-[#c4d6fe]":
                                        route.active,
                                }
                            )}
                            onClick={() => {
                                setPathname(route.href);
                                const element = document.getElementById(
                                    route.href
                                );

                                const yOffset = -64;
                                const y =
                                    element!.getBoundingClientRect().top +
                                    window.scrollY +
                                    yOffset;

                                window.scrollTo({ top: y, behavior: "smooth" });
                            }}
                        >
                            <span>{route.label}</span>
                        </p>
                    ))}
                </div>
                <div
                    className="absolute top-0 right-0 w-full h-full pattern-isometric pattern-blue-300 pattern-bg-white 
  pattern-size-24 pattern-opacity-10"
                ></div>

                <div className="flex flex-col w-full gap-12 md:container md:px-44 py-8">
                    <div
                        id="about"
                        className="bg-white rounded-md  p-8 md:p-10 shadow-sm max-w-lg relative self-start"
                    >
                        <span className="absolute -z-50 text-3xl inset-x-2 -inset-y-4 md:-inset-4 md:inset-y-1/4">
                            <Icons.arrowIcon />
                        </span>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-2xl">
                                    About{" "}
                                    <span
                                        className="underline underline-offset-4 text-accent cursor-pointer"
                                        onClick={() =>
                                            window.open("https://www.vtion.ai/")
                                        }
                                    >
                                        DOT & IMC
                                    </span>
                                </h1>
                                {/* <Icons.darkVtion className="" /> */}
                            </div>
                            <p>
                                In an era defined by rapid technological
                                advancement, India Mobile Congress (IMC) emerges
                                as a beacon of innovation and collaboration.
                                Organized by the Department of
                                Telecommunications (DoT) and the Cellular
                                Operator Association of India (COAI). IMC has
                                positioned itself as a leading forum for
                                bringing together industry, government,
                                academia, and other ecosystem players to
                                discuss, deliberate, demonstrate, and display
                                the latest trends in Telecom, Media, and
                                Technology (TMT)and ICT.
                            </p>
                        </div>
                    </div>
                    <div
                        id="challenge"
                        className="bg-white rounded-md p-8 md:p-10 shadow-sm max-w-lg relative self-end"
                    >
                        <span className="absolute text-3xl -inset-x-2 -inset-y-4 md:-inset-4 md:inset-y-0">
                            <Icons.speaker />
                        </span>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-2xl">
                                The Challenge
                            </h1>

                            <ul className="list-disc">
                                <li>Innovation in 5G & 6G</li>
                                <li>Autonomous networks</li>
                                <li>AI in network & communications</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="technologies"
                        className="bg-white rounded-md p-8 md:p-10 shadow-sm max-w-lg relative"
                    >
                        <span className="absolute -z-50 text-3xl inset-x-2 -inset-y-8 md:-inset-6 md:inset-y-10">
                            <Icons.bulb />
                        </span>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-2xl">Technologies</h1>
                            <ul className="list-disc">
                                <li>You are open to use any tech stack</li>
                                <li>
                                    We would suggest using the following TBD
                                </li>
                                <li>TBD</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="prizes"
                        className="bg-white rounded-md p-8 md:p-10 shadow-sm max-w-lg relative self-end"
                    >
                        <span className="absolute text-3xl inset-x-2 -inset-y-8 md:-inset-7 md:inset-y-1/4">
                            <Icons.trophy />
                        </span>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-2xl">Prizes</h1>
                            <h2 className="text-accent font-semibold text-lg">
                                More Than a Hackathon—An opportunity
                            </h2>
                            <ul className="list-disc">
                                <li>💰 3 Lakh cash pool prize</li>
                                <li>🌟 GTM opportunity for your product</li>
                                <li>🔍 Mentorship by experts</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="apply"
                        className="bg-white rounded-md p-8 md:p-10 shadow-sm max-w-lg relative"
                    >
                        <span className="absolute text-3xl inset-x-2 -inset-y-10 md:-inset-9 md:inset-y-8">
                            <Icons.profile className="scale-75" />
                        </span>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-2xl">
                                Who Should Apply
                            </h1>
                            <ul className="list-disc">
                                <li>🚄 Startups</li>
                                <li>📺 Working professionals</li>
                                <li>🔢 Any under or post grad students</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="event"
                        className="bg-white rounded-md p-8 md:p-10 shadow-sm max-w-lg relative self-end"
                    >
                        <span className="absolute text-3xl inset-x-2 -inset-y-8 md:-inset-7 md:inset-y-16">
                            <Icons.calender />
                        </span>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-2xl">
                                Event Timeline
                            </h1>
                            <h2 className="text-accent font-semibold text-lg">
                                30 Days to TV Streaming Mastery
                            </h2>
                            <ul className="list-disc">
                                <li>
                                    🚀{" "}
                                    <span className="font-bold">
                                        10-06-2024
                                    </span>
                                    : Registration & Idea submission opens
                                </li>
                                <li>
                                    📅{" "}
                                    <span className="font-bold">
                                        07-07-2024
                                    </span>
                                    : Registrations & Idea submission closes
                                </li>
                                <li>
                                    🎤{" "}
                                    <span className="font-bold">
                                        10-07-2024
                                    </span>
                                    : Announcement of shortlisted applicants
                                </li>
                                <li>
                                    💡{" "}
                                    <span className="font-bold">
                                        11-07-2024
                                    </span>
                                    : Prototype development starts
                                </li>
                                <li>
                                    🔍{" "}
                                    <span className="font-bold">
                                        21-07-2024
                                    </span>
                                    : Submissions of prototypes
                                </li>
                                <li>
                                    🏆{" "}
                                    <span className="font-bold">
                                        22-07-2024
                                    </span>
                                    : Demo day and winner announcement
                                </li>
                            </ul>
                            <h2>
                                <span className="font-bold">Note:</span> Join
                                our AMA Session along with the team on 26th
                                September ’24
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
