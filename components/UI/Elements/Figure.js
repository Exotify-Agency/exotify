import classes from "./Figure.module.scss";

import Border from "../Styling/Border";
import Animate from "../Animate/Animate";
import { forwardRef } from "react";
import Image from "./Image";
import { useDepth } from "@/hooks/useDepth";

const Figure = forwardRef(
  (
    {
      className,
      caption,
      isVisible = true,
      direction = "down",
      duration = 1,
      delay = 0,
      instant,
      includeBorder = false,
      padding = "var(--pd-limit-width)",
      parallaxOptions,
      tint = false,
      ...otherProps
    },
    ref
  ) => {
    const depth = useDepth(-10);

    let figureClassName = [classes.Figure, className ? className : ""];
    figureClassName = figureClassName.join(" ");

    return (
      <figure className={figureClassName} ref={ref} {...otherProps}>
        <Border
          className={classes.FigureContainer}
          isShown={includeBorder && isVisible}
          delay={0.25 + delay}
          duration={duration}
          borderStyle="double"
          padding={padding}
        >
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
              src={otherProps.src}
              alt={otherProps.alt}
              width={otherProps.width}
              height={otherProps.height}
              ref={depth.ref}
            />
            {tint && <span className={classes.FigureOverlay} />}
          </Animate.ClipIn>

          {/* CAPTION */}
          <Animate.SlideIn
            className={classes.FigureCaption}
            isVisible={isVisible}
            direction="right"
            delay={delay}
            duration={duration}
            instant={instant}
          >
            <figcaption className="caption">{caption}</figcaption>
          </Animate.SlideIn>
        </Border>
      </figure>
    );
  }
);

Figure.displayName = "Figure";
export default Figure;
