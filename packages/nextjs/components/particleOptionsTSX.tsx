import { ISourceOptions } from "tsparticles-engine";

export const options: ISourceOptions = {
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  background: {
    image: "linear-gradient(19deg, #FFFFFF 0%, #93BBFB 100%)",
  },
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "image",
      image: [
        {
          src: "ethereum-eth.svg",
          height: 50,
          width: 50,
        },
      ],
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.25,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 29,
      random: true,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 300,
      color: "#ffffff",
      opacity: 0,
      width: 0,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "top",
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 790,
        size: 79,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
//export default { options };
