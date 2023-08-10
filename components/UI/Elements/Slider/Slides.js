import React, { useEffect, useRef, useState } from "react";
import Slide from "./Slide";

import classes from "./Slider.module.scss";

const Slides = ({ slides, slide, totalChange, options, classNames }) => {
  // Dynamic dimensions that are automatically calculated
  const slidesRef = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    if (!isLoaded) return setIsLoaded(true);

    // Filter out invisible slides
    const filter = (s, i) =>
      i - slides.length >= 0 && i - slides.length < options.visibleSlides;
    const visibleSlides = slidesRef.current.filter(filter);

    // Height of tallest slide
    const getTallest = (p, c) => Math.max(p, c.getBoundingClientRect().height);
    const height = visibleSlides.reduce(getTallest, 0);

    // Sum of visible slide widths + corresponding number of gaps
    const addWidth = (p, c) => p + c.getBoundingClientRect().width;
    let width = visibleSlides.reduce(addWidth, 0);
    width = `${width}px + ${options.gap} * ${visibleSlides.length - 1}`;
    width = `calc(${width})`;

    // Set states
    setHeight(height);
    setWidth(width);
  }, [isLoaded, width, height, options, slides]);

  const loopedSlides = loopSlides(slide, slides, options.visibleSlides); // visible slides start at slides.length
  const identifiedSlides = identifySlides(loopedSlides, totalChange); // key is tracked as slide moves

  // Used to render/calculate dimensions on prerender and realtime
  const slidesDOM = identifiedSlides.map((slide, i, arr) => {
    const position = i - slides.length;
    const isVisible = position >= 0 && position < options.visibleSlides;
    const isActive = position === options.activeSlide;

    return (
      <Slide
        key={slide.key}
        isVisible={isVisible}
        isActive={isActive}
        classNames={classNames}
        isSlideDOM
        ref={(e) => (slidesRef.current[i] = e)}
      >
        {slide}
      </Slide>
    );
  });

  // Used to display slides
  const slidesDisplay = identifiedSlides.map((slide, i) => {
    const position = i - slides.length;
    const isVisible = position >= 0 && position < options.visibleSlides;
    const isActive = position === options.activeSlide;

    return (
      <Slide
        key={slide.key}
        slides={slides}
        slideNodes={slidesRef.current}
        position={position}
        isVisible={isVisible}
        isActive={isActive}
        classNames={classNames}
        options={options}
      >
        {slide}
      </Slide>
    );
  });

  const styles = {
    transition: `height ${options.duration}s, width ${options.duration}s`,
    width: isLoaded ? width : "auto",
    height: isLoaded ? height : "auto",

    // For SlideDOMs
    alignItems: options.centerSlides ? "center" : null,
    gap: options.gap,
  };

  return (
    <div className={classNames.slides} style={styles}>
      {slidesDOM}
      {slidesDisplay}
    </div>
  );
};

export default Slides;

function loopSlides(slide, slides, visibleSlides) {
  let middle = slides.length;
  while (middle < visibleSlides) {
    middle += slides.length;
  }

  let looped = []; // must be multiple of slides.length
  for (let i = -slides.length; i <= middle + slides.length - 1; i++) {
    let pushed = i + slide;

    // increase until in the range of slides.length
    while (pushed < 0) {
      pushed += slides.length;
    }

    // decrease until in the range of slides.length
    while (pushed > slides.length - 1) {
      pushed -= slides.length;
    }
    looped.push(slides[pushed]);
  }
  return looped;
}

function identifySlides(slides, totalChange) {
  return slides.map((slide, i) =>
    React.cloneElement(slide, { key: `slide=(${i + totalChange})` })
  );
}
