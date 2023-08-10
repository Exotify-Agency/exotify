import React from "react";

const Dots = ({
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
}) => {
  const prevSlideButton = React.cloneElement(
    elements.sliderPrev,
    {
      className: classNames.sliderPrev,
      onClick: prevSlide,
      disabled: isDisabled || isPrevDisabled,
      "aria-label": "previous slide",
    },
    elements.sliderPrev.props.children
  );

  const nextSlideButton = React.cloneElement(
    elements.sliderNext,
    {
      className: classNames.sliderNext,
      onClick: nextSlide,
      disabled: isDisabled || isNextDisabled,
      "aria-label": "next slide",
    },
    elements.sliderNext.props.children
  );

  // Generate dot elements
  const dotButtons = slides.map((dot, i) => {
    const isVisible = i >= slide && i < slide + options.visibleSlides;
    const isActive = i === slide;
    const className = [
      classNames.dot,
      isVisible ? classNames.visibleDot : null,
      isActive ? classNames.activeDot : null,
    ].join(" ");

    return React.cloneElement(
      elements.dot,
      {
        key: i,
        className,
        onClick: setSlide.bind(null, i),
        "aria-label": `select slide ${i + 1}`,
        disabled:
          isDisabled ||
          i === slide ||
          (i > slide && isNextDisabled) || // dots after last scrollable slide
          (i < slide && isPrevDisabled), // dots before first scrollable slide
      },
      options.showDotText ? i + 1 : null
    );
  });

  return (
    <div className={classNames.dots}>
      {!options.hideButtons && prevSlideButton}
      {!options.hideDots && dotButtons}
      {!options.hideButtons && nextSlideButton}
    </div>
  );
};

export default Dots;
