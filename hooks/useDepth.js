import { isMobile } from "react-device-detect";
import { useParallax } from "react-scroll-parallax";

export const useDepth = (speed = 10) => {
  const parallax = useParallax({ speed: !isMobile ? speed : 0 });

  return { ref: parallax.ref };
};
