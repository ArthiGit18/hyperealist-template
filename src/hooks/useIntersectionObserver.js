import { useEffect } from 'react';

const useIntersectionObserver = (ref, options, callback) => {
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(element);
      }
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options, callback]);
};

export default useIntersectionObserver;
