import React, {useRef, useEffect} from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const Section4 = () => {

    const imgWrapperRef = useRef(null);

  useEffect(() => {
    const imgElement = imgWrapperRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgElement.querySelector('img').style.animationPlayState = 'running';
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    );

    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, []);


  const lineAnime1 = useRef(null);
  const lineAnime2 = useRef(null);
  const lineAnime3 = useRef(null);
  const lineAnime4 = useRef(null);
  const lineAnime5 = useRef(null);
  const lineAnime6 = useRef(null);
  const lineAnime7 = useRef(null);
    
    const handleIntersection = (element) => {
        element.classList.add('visible');
    };

    const observerOptions = {
        threshold: 0.1,
    };

    useIntersectionObserver(lineAnime1, observerOptions, handleIntersection);
    useIntersectionObserver(lineAnime2, observerOptions, handleIntersection);
    useIntersectionObserver(lineAnime3, observerOptions, handleIntersection);
    useIntersectionObserver(lineAnime4, observerOptions, handleIntersection);
    useIntersectionObserver(lineAnime5, observerOptions, handleIntersection);
    useIntersectionObserver(lineAnime6, observerOptions, handleIntersection);
    useIntersectionObserver(lineAnime7, observerOptions, handleIntersection);

    return (
        <div className='container'>
            <div className='section1_wrapper' ref={imgWrapperRef}>
                <div className='img_wrapper'>
                    <img src="/assets/section4/img.png" alt="hero" />
                </div>
                <div className='clients_banner'>
                    <div className='clients_title'>
                        <p className='clients_title_p'>
                            They are extremely satisfied
                        </p>
                    </div>

                    <div className='clients_names_item'>
                        
                        <div className='client_name_item'>
                            <div className='line-anime' ref={lineAnime1}></div>
                            <div className='clients_name--content'>
                                <div className='title_overflow'>
                                    <a href="#">BAGEL CORNER</a>
                                </div>
                                <div className='title_overflow_content'>
                                    <h3>
                                        "Always at the Toooooooooop of the top ;)) Thank you for your support, a pleasure to work with you, vive HR vive BC vive #Kolorblend ;"
                                    </h3>
                                    <a href="#">RACHID EZ-ZAIDI</a>
                                </div>
                            </div>
                        </div>

                        <div className='client_name_item'>
                            <div className='line-anime' ref={lineAnime2}></div>
                            <div className='clients_name--content'>
                                <div className='title_overflow'>
                                    <a href="#">DARE YOURSELF</a>
                                </div>
                                <div className='title_overflow_content_rty'>
                                    <h3>
                                    "My new graphic charter has just been delivered on time and the result is really great, I'm delighted! I recommend Hyperealist without hesitation."
                                    </h3>
                                    <a href="#">LAURENE ALCARAZ</a>
                                    
                                </div>
                                
                            </div>
                            <div className='line-anime' ref={lineAnime3}></div>
                        </div>

                        <div className='client_name_item'>
                            <div className='line-anime' ref={lineAnime4}></div>
                            <div className='clients_name--content'>
                                <div className='title_overflow'>
                                    <a href="#">NIIR</a>
                                </div>
                                <div className='title_overflow_content'>
                                    <h3>
                                    "A sparkling team with innovative and original ideas. I loved working with them. I recommend them 1000%."
                                    </h3>
                                    <a href="#">ANNA SECK</a>
                                </div>
                            </div>
                            <div className='line-anime' ref={lineAnime5}></div>
                        </div>

                        <div className='client_name_item'>
                            <div className='line-anime' ref={lineAnime6}></div>
                            <div className='clients_name--content'>
                                <div className='title_overflow'>
                                    <a href="#">YOKITUP</a>
                                </div>
                                <div className='title_overflow_content_rty'>
                                    <h3>
                                    "Delighted to have been able to collaborate with the Hyperealist agency on my brand strategy and the design of my communication materials. Thank you for this creative impulse Hyperealist."
                                    </h3>
                                    <a href="#">JONATHAN VUKOVICH TRIBOUHARET</a>
                                </div>
                            </div>
                            <div className='line-anime' ref={lineAnime7}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
