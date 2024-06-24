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
    
    reveal.reveal('.single-img', { ...slideRight, delay: 500 });
    reveal.reveal('.projeto-titulo-reveal',{ ...slideLeft, delay: 500 });
    reveal.reveal('.projeto-p-reveal',{ ...slideLeft, delay: 750 });
    reveal.reveal('.button-wrap',{ ...slideRight, delay: 1000 , viewFactor: 0 });
    reveal.reveal('.img-reverse-reveal', { ...slideLeft, delay: 200 });
    reveal.reveal('.titulo-reverse-reveal',{ ...slideRight, delay: 200 });
    reveal.reveal('.p-reverse-reveal',{ ...slideRight, delay: 500 });
    
    
    
   
    
  
  
  };
  
  export default scrollRevealConfig;