import React, {useEffect, useState, useRef} from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section3 = () => {

    const headerRef = useRef(null);
    const model1 = useRef(null);
    const vector = useRef(null);

    const handleIntersection = (element) => {
        element.classList.add('visible');
    };

    const observerOptions = {
        threshold: 0.1,
    };

    useIntersectionObserver(headerRef, observerOptions, handleIntersection);
    useIntersectionObserver(model1, observerOptions, handleIntersection);
    useIntersectionObserver(vector, observerOptions, handleIntersection);



    return (
        <div className='container'>
            <div className='section1_wrapper'>
                <div className='hr__line'></div>
                <div className='section3_header' ref={headerRef}>
                    <h2>It's written</h2>
                    <h2>hyperealist</h2>
                    <h2>we sayced</h2>
                    <h2>hyper-realist</h2>
                    <div className='section3_star'>
                        <img src="/assets/section3/star.png" alt="star" />
                    </div>
                    <div className='section3_cube'>
                        <img src="/assets/section3/cube.png" alt="star" />
                    </div>
                </div>

                <div className='section3_content'>
                    <div className='section3_content_left' ref={model1}>
                        <div className='hr__line' style={{ margin: "15px 0" }}></div>
                        <div className='section3_content-type1'>
                            <div className=''>
                                <h3>hyper-</h3>
                                <p>Prefix ou adjective, from greek "huper":"on".</p>
                            </div>
                            <div className='section3_content-type1_div'>
                                <h3>INDICATES A HIGHER THAN AVERAGE INTENSITY</h3>
                                <button className='project_tags-p'>SYNONYM: SUPER-</button>
                            </div>
                        </div>
                    </div>
                    <div className='section3_content_right'  ref={vector}>
                        <div className='hr__line' style={{ margin: "15px 0" }}></div>
                        <div className='section3_content-type2'>
                            <div className=''>
                                <h3>realistic</h3>
                                <p>Adjective, from Latin "realis" : <br></br>related to material things".</p>
                            </div>
                            <div className=''>
                                <h3>WHO HAS THE SENSE OF REALITY, A PRACTICAL MIND</h3>
                                <button className='project_tags-p'>SYNONYM: PRAGMATIC-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3