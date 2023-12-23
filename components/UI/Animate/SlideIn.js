"use client";

import React, { forwardRef } from "react";

import { motion } from "framer-motion";

const SlideIn = forwardRef(
  (
    {
      children,
      isVisible = true,
      direction = "up",
      transition = {
        duration: 1,
        delay: 0,
      },
      instant,
      innerProps,
      ...otherProps
    },
    ref
  ) => {
    transition = {
      duration: transition.duration || 1,
      delay: transition.delay || 0,
      ease: transition.ease || "easeInOut",
    };

    if (instant) {
      transition.delay = 0;
      transition.duration = 0;
    }

    // Determine animation direction
    let initialPosition;
    if (direction === "up") {
      initialPosition = "0% 105%";
    } else if (direction === "down") {
      initialPosition = "0% -105%";
    } else if (direction === "left") {
      initialPosition = "105% 0%";
    } else if (direction === "right") {
      initialPosition = "-105% 0%";
    }

    return (
      <div
        ref={ref}
        style={{ ...otherProps.style, overflow: "hidden" }}
        {...otherProps}
      >
        <motion.div
          initial={{ translate: initialPosition }}
          animate={isVisible ? { translate: "0% 0%" } : false}
          transition={transition}
          {...innerProps}
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

SlideIn.displayName = "SlideIn";
export default SlideIn;
