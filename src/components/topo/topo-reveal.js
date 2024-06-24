import ScrollReveal from 'scrollreveal';


let revealTopo = null;

const scrollRevealConfig = (scrollPosition) => {
  
  if (scrollPosition === 0) {
    
    if (!revealTopo) {
    
      revealTopo = ScrollReveal();
      const slideDown = {
        distance: '90px',
        origin: 'top',
        duration: 1500,
        opacity: 0,
        interval: 1
      };
      const slideLeft = {
        distance: '90px',
        origin: 'right',
        duration: 1500,
        opacity: 0,
        interval: 1
      };
      
      revealTopo.reveal('.link-reveal1', { ...slideDown, delay: 0 });
      revealTopo.reveal('.link-reveal2', { ...slideDown, delay: 500 });
      revealTopo.reveal('.link-reveal3', { ...slideDown, delay: 1000 });
      revealTopo.reveal('.link-reveal4', { ...slideDown, delay: 1500 });
      revealTopo.reveal('.bra', { ...slideLeft, delay: 1000 });
      revealTopo.reveal('.eua', { ...slideLeft, delay: 1500 });
    }
  } else  {
  
    if (revealTopo) {
      revealTopo.clean('.link-reveal1');
      revealTopo.clean('.link-reveal2');
      revealTopo.clean('.link-reveal3');
      revealTopo.clean('.link-reveal4');
      revealTopo.clean('.bra');
      revealTopo.clean('.eua');
      
      
      revealTopo = null;
    }
  } 
};
export default scrollRevealConfig;