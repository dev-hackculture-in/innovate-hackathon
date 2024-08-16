import { Icons } from "./icons";

const Card = () => {
    return (
        <div className="bg-white rounded-md p-10 shadow-sm max-w-lg relative">
            <span className="absolute text-3xl -inset-4 inset-y-1/3">
                <Icons.speaker />
            </span>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl">The Challenge</h1>
                <h2 className="text-accent font-semibold text-lg">
                    Privacy-protected data Analytics and insights
                </h2>
                <p>
                    <span className="font-bold">Objective:</span> Develop a
                    solution to capture and analyze activities on the active
                    screen of a Connected TV, Smart setup boxes (Airtel Stream,
                    chromecast, firestick etc). This solution should accurately
                    identify and log app activity, content playback, and
                    in-video advertisements, ensuring all relevant data is
                    captured and formatted correctly and sent back to our
                    backend.
                </p>
            </div>
        </div>
    );
};

export default Card;
