import React, { useState, useEffect } from "react";

function FixdButton() {
  const [showButton, setShowButton] = useState(true); // Initially show the button

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerHeight = document.getElementById("footer").offsetHeight; // Assuming you have an element with the id "footer"

      // Calculate the threshold based on your requirements
      const scrollThreshold =
        documentHeight - footerHeight - windowHeight - 100;

      if (scrollY > scrollThreshold) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <div className="fixed z-40 bottom-0 left-0 w-full block md:hidden rounded-t-md overflow-hidden">
          <div className="flex justify-center items-center py-10 px-9 bg-[#01a8c3]">
            <button className="text-lg font-medium text-white capitalize">
              Plan Your Trip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FixdButton;
