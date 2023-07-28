import { useInView } from "react-intersection-observer";

export const useReveal = (revealPassed = true) => {
  const { inView, ref, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const isPassed = entry?.boundingClientRect.top < 0;
  const isFullyPassed =
    entry?.boundingClientRect.top + entry?.boundingClientRect.height < 0;
  const reveal = revealPassed ? inView || isPassed : inView;

  return { reveal, ref, instant: isFullyPassed };
};
