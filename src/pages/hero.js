import React from 'react'
import Navbar from './navbar';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
    return (
        <div className='container'>
            <div className='hero'>
                <Navbar />
            </div>
            <div className='hero_wrapper'>
                <div className='rotate_vector'>
                    <img src="/assets/flower.png" alt="ImageLoad" className="rotating_image" />
                </div>
                <div className='hero_content'>

                    <div className='hero_left'>act --- together</div>
                    <div className='hero_center'>
                        <h1>branding agency and brand strategy</h1>
                        <img src="/assets/vector1.png" alt="vector Img" className='hero_vector' />
                        <div className='vertor_span'>
                            <span className='hero_vector_btn'>Hyperealist</span>
                            <div className='hero_vector_txt'>
                                <span className=''>Reveal </span>
                                <span className=''>the be[a]st</span>
                            </div>
                        </div>
                    </div>
                    <div className='hero_right'>create --- your story</div>
                </div>

                <div className='shake_arrow'>
                    <img src="/svgArrow.svg" alt="Arrow" className='hero_arrow_Anim' />
                    {/* <ArrowDownwardIcon className='hero_arrow_Anim' sx={{ color: '#edf738' }} /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero;