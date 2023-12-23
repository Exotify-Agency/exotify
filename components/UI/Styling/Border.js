"use client";

import classes from "./Border.module.scss";
import React, { forwardRef } from "react";

import { motion } from "framer-motion";

const Border = forwardRef(
  (
    {
      isVisible = true,
      instant,
      padding = "var(--pd-limit-width)",
      borderStyle = "solid",
      transition = { duration: 1, delay: 0 },
      children,
      ...otherProps
    },
    ref
  ) => {
    const thickness = "1px";

    if (instant) {
      transition.duration = 0;
      transition.delay = 0;
    }

    let paddingTop, paddingLeft;
    const paddingSplit = padding.split(" ");
    if (paddingSplit.length === 2) {
      paddingTop = paddingSplit[0];
      paddingLeft = paddingSplit[1];
    } else {
      paddingTop = padding;
      paddingLeft = padding;
    }

    const commonStyles = { position: "absolute", background: "var(--bd-gold)" };

    // MAIN BORDER
    const stylesTop = {
      ...commonStyles,
      height: thickness,
      top: paddingTop,
      left: "50%",
      translate: "-50% 0",
    };
    const initialTop = { width: 0 };
    const finalTop = { width: `calc(100% - 2 * ${paddingLeft})` };

    const stylesBottom = {
      ...commonStyles,
      height: thickness,
      bottom: paddingTop,
      left: "50%",
      translate: "-50% 0",
    };
    const initialBottom = { width: 0 };
    const finalBottom = { width: `calc(100% - 2 * ${paddingLeft})` };

    const stylesLeft = {
      ...commonStyles,
      width: thickness,
      left: paddingLeft,
      top: "50%",
      translate: "0 -50%",
    };
    const initialLeft = { height: 0 };
    const finalLeft = { height: `calc(100% - 2 * ${paddingTop})` };

    const stylesRight = {
      ...commonStyles,
      width: thickness,
      right: paddingLeft,
      top: "50%",
      translate: "0 -50%",
    };
    const initialRight = { height: 0 };
    const finalRight = { height: `calc(100% - 2 * ${paddingTop})` };

    // DOUBLE BORDER
    const stylesTopDouble = {
      ...commonStyles,
      height: thickness,
      top: `calc(${paddingTop} + 2 * ${thickness})`,
      left: "50%",
      translate: "-50% 0",
    };
    const initialTopDouble = { width: 0 };
    const finalTopDouble = {
      width: `calc(100% - 2 * ${paddingLeft} - 4 * ${thickness})`,
    };

    const stylesBottomDouble = {
      ...commonStyles,
      height: thickness,
      bottom: `calc(${paddingTop} + 2 * ${thickness})`,
      left: "50%",
      translate: "-50% 0",
    };
    const initialBottomDouble = { width: 0 };
    const finalBottomDouble = {
      width: `calc(100% - 2 * ${paddingLeft} - 4 * ${thickness})`,
    };

    const stylesLeftDouble = {
      ...commonStyles,
      width: thickness,
      left: `calc(${paddingTop} + 2 * ${thickness})`,
      top: "50%",
      translate: "0 -50%",
    };
    const initialLeftDouble = { height: 0 };
    const finalLeftDouble = {
      height: `calc(100% - 2 * ${paddingTop} - 4 * ${thickness})`,
    };

    const stylesRightDouble = {
      ...commonStyles,
      width: thickness,
      right: `calc(${paddingTop} + 2 * ${thickness})`,
      top: "50%",
      translate: "0 -50%",
    };
    const initialRightDouble = { height: 0 };
    const finalRightDouble = {
      height: `calc(100% - 2 * ${paddingTop} - 4 * ${thickness})`,
    };

    return (
      <div className={classes.Border} {...otherProps} ref={ref}>
        {children}

        {/* MAIN BORDER */}
        <motion.span
          style={stylesTop}
          transition={transition}
          initial={initialTop}
          animate={finalTop}
        />
        <motion.span
          style={stylesBottom}
          transition={transition}
          initial={initialBottom}
          animate={finalBottom}
        />
        <motion.span
          style={stylesLeft}
          transition={transition}
          initial={initialLeft}
          animate={finalLeft}
        />
        <motion.span
          style={stylesRight}
          transition={transition}
          initial={initialRight}
          animate={finalRight}
        />

        {/* BORDER DOUBLE */}
        {borderStyle === "double" && (
          <>
            <motion.span
              style={stylesTopDouble}
              transition={transition}
              initial={initialTopDouble}
              animate={finalTopDouble}
            />
            <motion.span
              style={stylesBottomDouble}
              transition={transition}
              initial={initialBottomDouble}
              animate={finalBottomDouble}
            />
            <motion.span
              style={stylesLeftDouble}
              transition={transition}
              initial={initialLeftDouble}
              animate={finalLeftDouble}
            />
            <motion.span
              style={stylesRightDouble}
              transition={transition}
              initial={initialRightDouble}
              animate={finalRightDouble}
            />
          </>
        )}
      </div>
    );
  }
);

Border.displayName = "Border";
export default Border;
