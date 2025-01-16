import React from "react";


const Card = () => {

    const newsData = {
        image: "/images/images.jpeg", // Replace with your image URL
        title: "Breaking News: Something Exciting Happened!",
        date: "January 13, 2025",
        venue: "New York City",
        trends: ["Breaking", "Trending", "Exciting"],
        description:
            "This is a brief description of the news. It gives an overview of the event and what happened. Click to read more!",
    };




    return (
        <div className="mt-5  flex bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-3xl">
            {/* Image Section */}
            <div className="w-1/3">
                <img
                    src={newsData.image}
                    alt="News Thumbnail"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="w-2/3 p-4">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800">{newsData.title}</h2>
                
                {/* Meta Info */}
                <div className="mt-2 text-sm text-gray-600">
                    <p className="mb-1"><strong>Date:</strong> {newsData.date}</p>
                    <p className="mb-1"><strong>Venue:</strong> {newsData.venue}</p>
                    <p className="mb-1">
                        <strong>Trends:</strong> {newsData.trends.join(", ")}
                    </p>
                </div>
                
                {/* Description */}
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    {newsData.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
