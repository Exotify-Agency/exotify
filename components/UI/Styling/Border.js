"use client";

import React, { forwardRef } from "react";

const Border = forwardRef(
  (
    {
      children,
      isVisible = true,
      padding = "var(--pd-limit-width)",
      paddingTop,
      paddingLeft,
      borderStyle = "solid",
      duration = 1,
      delay = 0,
      instant,
      ...otherProps
    },
    ref
  ) => {
    if (instant) {
      duration = 0;
      delay = 0;
    }

    const thickness = "1px";

    const containerStyles = { position: "relative" };
    const sharedBorderStyles = {
      position: "absolute",
      backgroundColor: "var(--bd-gold)",
      transition: `width ${duration}s ${delay}s, height ${duration}s ${delay}s`,
    };

    const borderTopStyles = {
      ...sharedBorderStyles,
      height: thickness,
      width: isVisible ? `calc(100% - 2 * ${paddingLeft || padding})` : 0,
      top: paddingTop || padding,
      left: "50%",
      translate: "-50% 0",
    };
    const doubleBorderTopStyles = {
      ...borderTopStyles,
      width: isVisible ? `calc(${borderTopStyles.width} - 4px)` : 0,
      top: `calc(${borderTopStyles.top} + 0.2rem)`,
    };

    const borderRightStyles = {
      ...sharedBorderStyles,
      width: thickness,
      height: isVisible ? `calc(100% - 2 * ${paddingTop || padding})` : 0,
      top: "50%",
      right: paddingLeft || padding,
      translate: "0 -50%",
    };
    const doubleBorderRightStyles = {
      ...borderRightStyles,
      height: isVisible ? `calc(${borderRightStyles.height} - 4px)` : 0,
      right: `calc(${borderRightStyles.right} + 0.2rem)`,
    };

    const borderBottomStyles = {
      ...sharedBorderStyles,
      height: thickness,
      width: isVisible ? `calc(100% - 2 * ${paddingLeft || padding})` : 0,
      bottom: paddingTop || padding,
      left: "50%",
      translate: "-50% 0",
    };
    const doubleBorderBottomStyles = {
      ...borderBottomStyles,
      width: isVisible ? `calc(${borderBottomStyles.width} - 4px)` : 0,
      bottom: `calc(${borderBottomStyles.bottom} + 0.2rem)`,
    };

    const borderLeftStyles = {
      ...sharedBorderStyles,
      width: thickness,
      height: isVisible ? `calc(100% - 2 * ${paddingTop || padding})` : 0,
      top: "50%",
      left: paddingLeft || padding,
      translate: "0 -50%",
    };
    const doubleBorderLeftStyles = {
      ...borderLeftStyles,
      height: isVisible ? `calc(${borderLeftStyles.height} - 4px)` : 0,
      left: `calc(${borderLeftStyles.left} + 0.2rem)`,
    };

    return (
      <div style={containerStyles} {...otherProps} ref={ref}>
        {children}

        {/* MAIN BORDER */}
        <span style={borderTopStyles} />
        <span style={borderRightStyles} />
        <span style={borderBottomStyles} />
        <span style={borderLeftStyles} />

        {/* BORDER DOUBLE */}
        {borderStyle === "double" && (
          <>
            <span style={doubleBorderTopStyles} />
            <span style={doubleBorderRightStyles} />
            <span style={doubleBorderBottomStyles} />
            <span style={doubleBorderLeftStyles} />
          </>
        )}
      </div>
    );
  }
);

Border.displayName = "Border";
export default Border;
