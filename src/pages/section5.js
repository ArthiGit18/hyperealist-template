import React, { useEffect, useRef } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const Section5 = () => {

    window.addEventListener('scroll', function () {
        const img = document.querySelector('.section5_Img img');
        const scrollTop = window.scrollY; // Get the number of pixels the document has been scrolled vertically
        const rotation = scrollTop * 0.1; // Adjust the multiplier to control the rotation speed

        img.style.transform = `rotate(${rotation}deg)`;
    });


    const headerRef = useRef(null);

    const handleIntersection = (element) => {
        element.classList.add('visible');
    };

    const observerOptions = {
        threshold: 0.1,
    };

    useIntersectionObserver(headerRef, observerOptions, handleIntersection);



    return (
        <div className='container'>
            <div className='section5_wrapper'>
                <div className='section5_Img'>
                    <img src="/assets/section5/vector.png" alt="Image" />
                </div>
                <div className='section5_header' ref={headerRef}>
                    <h2>CONTACT US</h2>
                    <div className='section5_mail'>
                        <a href="#"> <span>hello@hyperealist.com</span></a>
                        <a href="#"> <span>whatsapp</span></a>
                    </div>
                </div>

                <div className='footer_nav'>
                    <div className='nav-list-items'>
                        <a href="#"><p>PROJECTS</p></a>
                        <a href="#"><p>SERVICES</p></a>
                        <a href="#"><p>ABOUT</p></a>
                        <a href="#"><p>BLOG</p></a>
                        <a href="#">
                            <button className='section5_bth_nav'>MAKE AN APPPOINTMENT</button>
                        </a>
                    </div>
                </div>

                <div className='footer_social'>
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><LinkedInIcon /></a>
                    <a href="#"><PinterestIcon /></a>
                    <a href="#"><PinterestIcon /></a>
                    <a href="#"><PinterestIcon /></a>
                </div>

                <div className="footer_legals_link">
                    <a href="#"><p>Privacy policy</p></a>
                    <a href="#"><p>Cookie policy</p></a>
                    <a href="#"><p>Terms & Conditions</p></a>
                    <a href="#"><p>2024 Hyperealist</p></a>
                </div>
            </div>
        </div>
    )
}
