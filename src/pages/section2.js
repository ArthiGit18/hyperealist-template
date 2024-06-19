
import React, { useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section2 = () => {

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
                <div className='section2_wrapper' >
                    <span className='section2_header' ref={headerRef}>The Hyperealist agency</span>
                </div>

                <div className='model1' ref={model1}>
                    <h2 className='section2_about_title'>BRAND STRATEGY</h2>
                    <section className='section2_title'>
                        <h2 className='section2_span'>BRANDING</h2>
                        <button className='section2_tag_btn'>OUR MISSION</button>

                    </section>
                    <div className='section2_dots'></div>
                    <div className='section2_dots_empty'></div>
                </div>

                <div className='section2_table' >
                    <div className='section2_vector' ref={vector}>
                        <img src="/assets/section2/vector.png" alt="img" className="section2_vector-img" />
                        <div className='section2_vector_content'>
                            <div className='list1'>
                                <img src="/assets/section2/red_dot.png" alt="list" />
                                <p className=''>Talk about your business effectively</p>
                            </div>
                            <div className='list1'>
                                <img src="/assets/section2/red_dot.png" alt="list" />
                                <p className=''>Support you in your effort to clarify your goals and ambition</p>
                            </div>
                            <div className='list1'>
                                <img src="/assets/section2/red_dot.png" alt="list" />
                                <p className=''>Claim your added value with creativity</p>
                            </div>
                            <div className='list1'>
                                <img src="/assets/section2/red_dot.png" alt="list" />
                                <p className=''>Inspire you everyday, brainstorm a vision and long term partnership</p>
                            </div>
                            <div className='list1'>
                                <img src="/assets/section2/red_dot.png" alt="list" />
                                <p className=''>Enable you to express yourself powerfully in your market</p>
                            </div>
                        </div>
                    </div>

                    <div className='table_section2'>
                        <div className="table">
                            <div className='header_space'></div>
                            <div class="header">
                                <h3>Our Expertise</h3>
                            </div>
                            <div class="container-table">
                                <div class="row">
                                    <div class="column border">Brand Strategy</div>
                                    <div class="column border">Brand Content</div>
                                </div>

                                <div class="row">
                                    <div class="column border">Copywriting and Storytelling</div>
                                    <div class="rowspan">Creative Digital Strategy</div>
                                </div>
                                <div class="row last-row">
                                    <div class="column border">Branding</div>
                                    <div class="spanning"></div>
                                </div>
                                <div class="row">
                                    <div class="column border">Copywriting</div>
                                </div>
                            </div>
                        </div>
                        <button className='table_btn'>MAKE AN APPOINTMENT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section2