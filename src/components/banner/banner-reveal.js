import ScrollReveal from 'scrollreveal';

const scrollRevealConfig = () => {
  const reveal = ScrollReveal({ reset: false });

  const slideUp = {
    distance: '150px',
    origin: 'bottom',
    opacity: 0,
    interval: 2,
    delay: 1000,
    duration: 1500,
  };
  const slideUp1 = {
    distance: '100px',
    origin: 'bottom',
    opacity: 0,
    duration: 1500,
    interval: 2
  };
  const slideUp2 = {
    distance: '200px',
    origin: 'bottom',
    opacity: 0,
    duration: 1500,
    interval: 2,
    delay: 1500
  };
  
  
  reveal.reveal('.name-reveal', slideUp);
  reveal.reveal('.montanha', slideUp1);
  reveal.reveal('.sub-reveal', slideUp2);

};

export default scrollRevealConfig;
