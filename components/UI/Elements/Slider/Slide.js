import classes from "./Slider.module.scss";

import React, { forwardRef, useCallback, useEffect, useState } from "react";

const Slide = forwardRef(
  (
    {
      isSlideDOM,
      slides = [],
      slideNodes = [],
      position,
      isVisible,
      isActive,
      classNames = {},
      options = {},
      children: slideComponent,
    },
    ref
  ) => {
    if (slideComponent.length > 1)
      throw new Error("Slide must be only one element, fragments not allowed");

    const className = [
      slideComponent.props.className,
      isVisible ? classNames.visibleSlide : null,
      isActive ? classNames.activeSlide : null,
    ]
      .join(" ")
      .trim();

    // Cloned slide with state classes and extra styles
    const slide = React.cloneElement(slideComponent, {
      ...slideComponent.props,
      className,
      isVisible,
      isActive,
    });

    // Used to instantly show slides during hydration
    const [isLoaded, setIsLoaded] = useState(false);
    const [duration, setDuration] = useState(0);
    useEffect(() => setIsLoaded(true), []);
    useEffect(() => {
      if (isLoaded && !duration) setDuration(options.duration);
    }, [isLoaded, duration, options.duration]);

    // Calculates translate value for slide at any position
    const calcTranslate = useCallback(() => {
      if (!slideNodes.length) return 0;
      if (position === 0) return 0;

      let totalWidths = 0;
      for (let i = Math.abs(position); i > 0; i--) {
        const index = position > 0 ? i + slides.length - 1 : i;
        const slide = slideNodes[index];
        const width = slide.getBoundingClientRect().width;
        totalWidths = position > 0 ? totalWidths + width : totalWidths - width;
      }

      return `calc(${totalWidths}px + ${position} * ${options.gap})`;
    }, [position, slides.length, slideNodes, options.gap]);

    const styles = !isSlideDOM
      ? {
          translate: `
            ${calcTranslate()}
            ${options.centerSlides ? "-50%" : 0} 
            .0000000000000000000001px
          `,
          willChange: "translate",
          top: options.centerSlides ? "50%" : 0,
          visibility: isLoaded ? "visible" : "hidden",
          transition: `translate ${duration}s`,
        }
      : {
          position: !isVisible ? "absolute" : null, // hides for easier testing
          opacity: !isVisible ? "0" : null, // hides for easier testing
          visibility: isLoaded || !isVisible ? "hidden" : "visible",
        };

    return (
      <div
        className={!isSlideDOM ? classNames.slide : classes.SlideDOM}
        style={styles}
        ref={ref}
      >
        {slide}
      </div>
    );
  }
);

Slide.displayName = "Slide";
export default Slide;
