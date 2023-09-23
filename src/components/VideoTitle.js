import React, { useState, useEffect } from 'react';

const VideoTitle = ({ title, overview }) => {
  const [showTitle, setShowTitle] = useState(true);

  // Use useEffect to hide the title after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleMouseEnter = () => {
    setShowTitle(true);
  };

  const handleMouseLeave = () => {
    setShowTitle(false);
  };

  return (
    <div
      className={`w-screen aspect-video pt-[20%] px-6 md:px-18 absolute text-white bg-gradient-to-r from-black ${
        showTitle ? 'opacity-100' : 'opacity-40'
      } transition-opacity`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
          ▷ Play
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg ml-2 transition duration-300 ease-in-out">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
