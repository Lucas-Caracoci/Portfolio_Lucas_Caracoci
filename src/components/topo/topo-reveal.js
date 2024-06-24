import ScrollReveal from 'scrollreveal';

// Crie uma variável para manter uma referência aos objetos de revelação
let revealTopo = null;

const scrollRevealConfig = (scrollPosition) => {
  // Se a posição do scroll for 0, crie os objetos de revelação
  if (scrollPosition === 0) {
    // Verifique se a variável revealTopo já foi criada
    if (!revealTopo) {
      // Se não foi criada, crie os objetos de revelação
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
    // Se a posição do scroll não for 0, limpe os elementos revelados se revealTopo existir
    if (revealTopo) {
      revealTopo.clean('.link-reveal1');
      revealTopo.clean('.link-reveal2');
      revealTopo.clean('.link-reveal3');
      revealTopo.clean('.link-reveal4');
      revealTopo.clean('.bra');
      revealTopo.clean('.eua');
      
      // Defina revealTopo como null depois de limpar os elementos
      revealTopo = null;
    }
  } 
};
export default scrollRevealConfig;