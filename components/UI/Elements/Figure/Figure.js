import classes from "./Figure.module.scss";

import Border from "../../Styling/Border";
import Animate from "../../Animate/Animate";
import { forwardRef } from "react";
import Image from "../Image";
import { useDepth } from "@/hooks/useDepth";

const Figure = forwardRef(
  (
    {
      className,
      caption,
      src,
      alt,
      isVisible = true,
      direction = "down",
      duration = 1,
      delay = 0,
      instant,
      includeBorder = false,
      padding = "var(--pd-limit-width)",
      parallaxSpeed = -10,
      tint = false,
      noSrcSet = false,
      ...otherProps
    },
    ref
  ) => {
    const depth = useDepth(parallaxSpeed);

    let figureClassName = [
      classes.Figure,
      className ? className : null,
      parallaxSpeed !== 0 ? classes.hasParallax : null,
    ];
    figureClassName = figureClassName.join(" ").trim();

    return (
      <figure className={figureClassName} ref={ref} {...otherProps}>
        {/* IMAGE */}
        <Animate.ClipIn
          className={classes.FigureImage}
          isVisible={isVisible}
          direction={direction}
          delay={delay}
          duration={duration}
          instant={instant}
        >
          <Image
            src={src}
            alt={alt}
            width={otherProps.width}
            height={otherProps.height}
            ref={depth.ref}
            noSrcSet={noSrcSet}
          />
          {tint && <span className={classes.FigureOverlay} />}
        </Animate.ClipIn>
      </figure>
    );
  }
);

Figure.displayName = "Figure";
export default Figure;
