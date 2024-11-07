import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";

import { loadSlim } from "@tsparticles/slim"; 

const BgParticulas = (props) => {

  const [init, setInit] = useState(false);

  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
     
      await loadSlim(engine);
     
    }).then(() => {
      setInit(true);
    });
  }, []);

  

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#fff"
        }
      },
      delay: 0,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "repulse"
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: true,
              force: 4,
              smooth: 1000
            }
          },
          resize: {
            delay: 0.5,
            enable: true
          }
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            mix: false,
            opacity: 1,
            size: 1,
            color: {
              value: "#e45b00"
            }
          },
          repulse: {
            distance: 400,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
          },
          slow: {
            factor: 3,
            radius: 200
          },
          
        }
      },
      
      particles: {
        color: {
          value: [ "#242424"],
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: {}
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90
          },
      
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          outModes: {
            default: "out"
          },
          random: false,
          size: false,
          speed: {
            min: 0.1,
            max: 1
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080
          },
          limit: {
            mode: "delete",
            value: 0
          },
          value: 200
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1
          },
          animation: {
            count: 0,
            enable: true,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none"
          }
        },
        reduceDuplicates: false,
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle"
        },
        size: {
          value: {
            min: 1,
            max: 3
          },
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none"
          }
        },
      
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false
          },
          duration: {
            value: 0,
            sync: false
          }
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      smooth: false,
      zLayers: 1,
      name: "bg",
      
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        
        options={options}
      />
    );
  }

  return <></>;
};

export default BgParticulas;