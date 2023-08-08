import React from "react";
function HeaderVideo() {
  return (
    <header className="relative">
      <video
        className="w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
        poster="path/to/poster.jpg" // Provide a fallback image for the video
      >
        <source
          src="https://youtu.be/IWJxX8h3VwQ?list=RDIWJxX8h3VwQ"
          type="video/mp4"
        />
        {/* Add additional source tags for different video formats */}
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Your Video Header</h1>
        <p className="text-lg">Add your subtitle here</p>
      </div>
    </header>
  );
}

export default HeaderVideo;
