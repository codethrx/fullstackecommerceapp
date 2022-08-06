export const slideAnime = {
  hidden: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      //   when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
export const scalingAnime = {
  hidden: {
    scale: 0.2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};

export const opacityAnime = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export const pulsingAnime = {
  hidden: {
    scale: 0.8,
    opacity: 0.4,
  },
  show: {
    // scale: 0.94,
    opacity: 1,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
