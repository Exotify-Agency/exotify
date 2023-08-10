import React, { useCallback, useEffect, useState } from "react";

export const useSlider = ({
  slides,
  options = {},
  classNames = {},
  elements = {},
}) => {
  options = {
    jump: options.jump || 1,
    gap: options.gap || "1rem", // must include css unit
    duration: options.duration || 1,
    autoScrollDuration: options.autoScrollDuration || 3,
    animation: options.animation || "normal", // "normal" | "clip"
    initialSlide: options.initialSlide || 0,
    activeSlide: options.activeSlide || null,
    visibleSlides: options.visibleSlides || 1,
    hideDots: options.hideDots || false,
    hideButtons: options.hideButtons || false,
    infiniteLoop: options.infiniteLoop || false,
    allowBleed: options.allowBleed || false,
    centerSlides: options.centerSlides || true,
    showDotText: options.showDotText || false,
    autoScroll: options.autoScroll || false,
  };

  const [slide, setSlide] = useState(options.initialSlide); // used to determine slide position
  const [totalChange, setTotalChange] = useState(0); // used to track changes in slide positon
  const [isDisabled, setIsDisabled] = useState(true); // used to disable slide controls
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle errors to prevent strange behaviors
  const error = handleErrors(slides, options);
  if (error) throw error;

  // Manages disabled states during and after hydration
  useEffect(() => {
    // Disable slider until loaded
    if (!isLoaded) {
      setIsDisabled(false);
      setIsNextDisabled(false);
      setIsPrevDisabled(false);
      setIsLoaded(true);
      return;
    }

    // Determine is buttons are disabled
    const nextDisabled = !options.infiniteLoop
      ? options.allowBleed
        ? slide >= slides.length - 1
        : slide >= slides.length - options.visibleSlides
      : false;
    const prevDisabled = !options.infiniteLoop ? slide <= 0 : false;

    setIsNextDisabled(nextDisabled);
    setIsPrevDisabled(prevDisabled);
  }, [slide, options, slides.length, isLoaded]);

  // Disables then re-enables slider after duration
  const disableSlider = useCallback(() => {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), options.duration * 1000);
  }, [options.duration]);

  const nextSlideHandler = useCallback(() => {
    disableSlider();

    const newSlide = slide + options.jump;
    const lastSlide = slides.length - 1;
    const border = options.allowBleed
      ? lastSlide
      : slides.length - options.visibleSlides; // last slide without looping
    const exceedsBorder = newSlide > border;

    if (newSlide > lastSlide && options.infiniteLoop) {
      setSlide(options.jump - (slides.length - slide));
      setTotalChange((prev) => (prev += options.jump));
    } else if (exceedsBorder && !options.infiniteLoop) {
      setSlide(border);
      setTotalChange((prev) => (prev += border - slide));
    } else {
      setSlide((prev) => (prev += options.jump));
      setTotalChange((prev) => (prev += options.jump));
    }
  }, [disableSlider, options, slide, slides]);

  const prevSlideHandler = useCallback(() => {
    disableSlider();

    const newSlide = slide - options.jump;
    const firstSlide = 0;
    const border = firstSlide;
    const exceedsBorder = newSlide < border;

    if (exceedsBorder && options.infiniteLoop) {
      setSlide(slides.length - (options.jump - slide));
      setTotalChange((prev) => (prev -= options.jump));
    } else if (exceedsBorder && !options.infiniteLoop) {
      setSlide(border);
      setTotalChange((prev) => (prev += border - slide));
    } else {
      setSlide((prev) => (prev -= options.jump));
      setTotalChange((prev) => (prev -= options.jump));
    }
  }, [disableSlider, options, slide, slides]);

  const setSlideHandler = useCallback(
    (newSlide) => {
      disableSlider();

      const leftBorder = 0;
      const rightBorder = options.allowBleed
        ? slides.length - 1 // last slide
        : slides.length - options.visibleSlides; // last slide without looping
      const exceedsLeftBorder = newSlide < leftBorder;
      const exceedsRightBorder = newSlide > rightBorder;

      if (exceedsLeftBorder && !options.infiniteLoop) {
        setSlide(leftBorder);
        setTotalChange((prev) => (prev -= leftBorder - slide));
      } else if (exceedsRightBorder && !options.infiniteLoop) {
        setSlide(rightBorder);
        setTotalChange((prev) => (prev += rightBorder - slide));
      } else {
        setSlide(newSlide);
        setTotalChange((prev) => (prev -= slide - newSlide));
      }
    },
    [disableSlider, options, slide, slides]
  );

  // Auto scroll effect
  useEffect(() => {
    if (!options.autoScroll) return;

    const interval = setInterval(() => {
      nextSlideHandler();
    }, options.autoScrollDuration * 1000);

    return () => clearInterval(interval);
  }, [options, nextSlideHandler]);

  return {
    slides,
    slide,
    totalChange,
    isDisabled,
    isNextDisabled,
    isPrevDisabled,
    setIsDisabled,
    setIsNextDisabled,
    setIsPrevDisabled,
    nextSlide: nextSlideHandler,
    prevSlide: prevSlideHandler,
    setSlide: setSlideHandler,
    options,
    classNames,
    elements,
  };
};

function handleErrors(slides, options) {
  if (options.animation === "clip" && options.visibleSlides > 1)
    throw new Error("Only one visible slide is allowed for clip animations");
  if (options.jump > slides.length)
    throw new Error(
      "You cannot jump more than the length of the slides you provided"
    );
  if (!options.infiniteLoop && options.visibleSlides > slides.length)
    throw new Error(
      "Visible slides cannot be greater than slides length if inifinite loop is not on"
    );
  if (options.activeSlide > options.visibleSlide - 1)
    throw new Error("Active slide cannot be a slide that is not visible");
}
