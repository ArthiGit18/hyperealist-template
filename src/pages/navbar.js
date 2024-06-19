import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollY = useRef(0); // Store previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollUp = currentScrollY < prevScrollY.current; // Check for scroll up

      setIsScrolled(scrollUp ? false : currentScrollY > 10); // Show on scroll up, hide with threshold on down
      prevScrollY.current = currentScrollY; // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === 'c') {
      setIsScrolled(!isScrolled); // Toggle visibility based on current state
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup function to remove keydown listener on component unmount
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className='nav_wrapper' style={{ visibility: isScrolled ? 'hidden' : 'visible' }}>
      <div>
        <img src="/heroLogo.png" alt="Logo" />
      </div>

      <div className='nav_list'>
        <a href="#">PROJECTS</a>
        <a href="#">SERVICES</a>
        <a href="#">ABOUT</a>
        <a href="#">BLOG</a>
        <button type='button'>CONTACT US</button>
      </div>
    </div>
  );
};

export default Navbar;