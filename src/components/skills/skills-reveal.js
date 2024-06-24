import ScrollReveal from 'scrollreveal';

const scrollRevealConfig = () => {
    const reveal = ScrollReveal({reset:false});
  
    const slideUp = {
      distance: '200px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      interval: 0
      
    };
    const slideLeft = {
        distance: '200px',
        origin: 'right',
        duration: 1500,
        opacity: 0,
        interval: 0
      };
      const slideRight = {
        distance: '200px',
        origin: 'left',
        duration: 1500,
        opacity: 0,
        interval: 0
      };
    
    reveal.reveal('.btn-learning', { ...slideLeft, delay: 250 });
    reveal.reveal('.btn-learned',{ ...slideRight, delay: 250 });
    reveal.reveal('.skills-area',{ ...slideUp, delay: 500 });
    reveal.reveal('.html',{ ...slideRight, delay: 700 });
    reveal.reveal('.html-bar',{ ...slideRight, delay: 900 });
    reveal.reveal('.css',{ ...slideRight, delay: 1100 });
    reveal.reveal('.css-bar',{ ...slideRight, delay: 1300 });
    reveal.reveal('.js',{ ...slideRight, delay: 1500 });
    reveal.reveal('.js-bar',{ ...slideRight, delay:1700 });
    reveal.reveal('.react',{ ...slideRight, delay: 1900 });
    reveal.reveal('.react-bar',{ ...slideRight, delay: 2100 });
    
  
  
  };
  
  export default scrollRevealConfig;