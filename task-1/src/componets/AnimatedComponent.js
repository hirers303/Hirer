import React, { useState, useEffect } from 'react';
import './AppLinks.css'; // Import your Tailwind CSS or add styles directly here

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Toggle visibility every 3 seconds
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 3000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Text to appear */}
      {isVisible && <h1 className="animate-slidein">Appear Text</h1>}

      {/* Text to disappear */}
      {!isVisible && <h1 className="animate-slideout">Disappear Text</h1>}
    </div>
  );
};

export default AnimatedText;
