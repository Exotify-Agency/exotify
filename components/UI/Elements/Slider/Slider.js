import classes from "./Slider.module.scss";

import Slides from "./Slides";
import Dots from "./Dots";

const Slider = ({
  slides,
  slide,
  totalChange,
  isDisabled,
  isNextDisabled,
  isPrevDisabled,
  nextSlide,
  prevSlide,
  setSlide,
  options,
  classNames,
  elements,
}) => {
  const combine = (...classes) => classes.join(" ").trim();
  classNames = {
    slider: combine(classNames.slider || null, classes.Slider),
    sliderMain: combine(classNames.sliderMain || null, classes.SliderMain),
    slide: combine(classNames.slide || null, classes.Slide), // appears on slide, not element inside
    slides: combine(classNames.slides || null, classes.Slides),
    sliderPrev: combine(classNames.sliderPrev || null, classes.SliderPrev),
    sliderNext: combine(classNames.sliderNext || null, classes.SliderNext),
    dots: combine(classNames.dots || null, classes.Dots),
    dot: combine(classNames.dot || null, classes.Dot),
    visibleSlide: combine(classNames.visibleSlide || null, "visible"), // appears as className prop in component
    activeSlide: combine(classNames.activeSlide || null, "active"), // appears as className prop in component
    visibleDot: combine(classNames.visibleDot || null, "visible"), // appears on dots corresponding to visible slides
    activeDot: combine(classNames.activeDot || null, "active"), // appears on dots corresponding to active slide
  };

  elements = {
    sliderNext: elements.sliderNext || <button>Next</button>,
    sliderPrev: elements.sliderPrev || <button>Prev</button>,
    dot: elements.dot || <button />,
  };

  const slidesData = {
    slides,
    slide,
    totalChange,
    options,
    classNames,
  };

  const dotsData = {
    slides,
    slide,
    isDisabled,
    isNextDisabled,
    isPrevDisabled,
    nextSlide,
    prevSlide,
    setSlide,
    options,
    classNames,
    elements,
  };

  return (
    <div className={classNames.slider}>
      <div className={classNames.sliderMain}>
        <Slides {...slidesData} />
      </div>
      {(!options.hideButtons || !options.hideDots) && <Dots {...dotsData} />}
    </div>
  );
};

export default Slider;
