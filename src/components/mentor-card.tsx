import React from 'react';

interface MentorCardProps {
    name: string;
    location: string;
    title: string;
    imgSrc: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, location, title,  imgSrc }) => {
    return (
        <div className="bg-white w-full max-w-xs mx-auto rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full p-4 m-10">
            <div className="flex items-center justify-center flex-col h-full">
                <img src={imgSrc} alt="Mentor" className="rounded-full w-32" />
                <h1 className="text-gray-800 font-semibold text-xl mt-5">{name}</h1>
                <h2 className="text-gray-800 text-sm">{title}</h2>
                <h2 className="text-gray-500 text-sm">{location}</h2>
            </div>
        </div>
    );
};

export default MentorCard;
