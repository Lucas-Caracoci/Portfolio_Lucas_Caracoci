import ScrollReveal from 'scrollreveal';

const scrollRevealConfig = () => {
  const reveal = ScrollReveal({reset:false});

  const slideUp = {
    distance: '200px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    interval: 0
    
  };
  reveal.reveal('.titulo-reveal', { ...slideUp, delay: 0 });
  reveal.reveal('.card', { ...slideUp, delay: 0 });
  reveal.reveal('.eu',{ ...slideUp, delay: 500 });
  reveal.reveal('.btn-reveal1',{ ...slideUp, delay: 750 });
  reveal.reveal('.btn-reveal2',{ ...slideUp, delay: 1000 });
  reveal.reveal('.btn-reveal3',{ ...slideUp, delay: 1250 });
  reveal.reveal('.p-reveal',{ ...slideUp, delay: 1300 });


};

export default scrollRevealConfig;