import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MentorCard from './mentor-card';

interface Mentor {
    name: string;
    location: string;
    title: string;
    imgSrc: string;
}

const MentorCarousel: React.FC = () => {
    const mentors: Mentor[] = [
        {
            name: 'Ravi Sinha',
            title: "Vice President, Jio",
            location: 'Frisco, Texas, United States',
            imgSrc: 'https://media.licdn.com/dms/image/v2/D5603AQGYCJdgmOxWug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712982579934?e=1729123200&v=beta&t=3_FVQMX47cIi1ldFh0ms4kdXtkl9MPXRketsr_KWFDw'
        },
        {
            name: 'Aayush Bhatnagar',
            location: 'Mumbai, Maharashtra, India',
            title: "Senior Vice President, Jio",
            imgSrc: 'https://media.licdn.com/dms/image/v2/C5603AQEsoV_ecpELxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639274849847?e=1729123200&v=beta&t=F_kqCdkFuYoqDepEbDqseOfwGQ3Cc6qIswykzTv_3Rc'
        },
        {
            name: 'Sanjay Kumar',
            location: 'Bengaluru, Karnataka, India',
            title: "Founder, TelcoLearn",
            imgSrc: 'https://media.licdn.com/dms/image/v2/C4D03AQHTIKyVXyMIPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1611146301185?e=1729123200&v=beta&t=8D7WjSmzVfYB7FhaxWzHfdYjIJfhjhFszmMbh1zaA3g'
        },
        {
            name: 'Neil Shah',
            location: 'Mumbai, Maharashtra, India',
            title: "Partner & Co-Founder, Counterpoint Research",
            imgSrc: 'https://media.licdn.com/dms/image/v2/C5103AQF0pc7skGpYDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1538896217712?e=1729123200&v=beta&t=MjO_gpX8j29VDdcSLI4q3qw7thTqvUM7z0YH1HtccuU'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false, 
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false, 
                }
            }
        ]
    };

    return (
        <div className="slider-container text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 p-10">Meet Our Mentors & Jury</h1>

            <Slider {...settings}>
                {mentors.map((mentor, index) => (
                    <div key={index} className="flex justify-center">
                        <MentorCard
                            name={mentor.name}
                            location={mentor.location}
                            title={mentor.title}
                            imgSrc={mentor.imgSrc}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MentorCarousel;
