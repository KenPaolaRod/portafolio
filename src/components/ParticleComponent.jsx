import React from 'react';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const ParticleComponent = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    container
  };

  const options = useMemo(
    () => ({
      "fullScreen": {
        "enable": false,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#8C52FF"
        },
        "shape": {
            "type": "circle",
            "options": {
                "sides": 8
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
        "links": {
          "color": "#8C52FF",
          "distance": 150,
          "enable": true,
          "opacity": 0.5,
          "width": 2,            
      },
        "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab"]
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#111",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}

      />
    );
  } 
  return (
    <>
   
    </>
  );
};

export default ParticleComponent;
