import classes from "./Figure.module.scss";

// import Border from "../../Styling/Border";
import Animate from "../../Animate/Animate";
import { forwardRef } from "react";
import Image from "next/image";
import { useDepth } from "@/hooks/useDepth";
import { join } from "@/utils/helpers";

const Figure = forwardRef(
  (
    {
      className,
      isVisible = true,
      direction = "down",
      transition,
      instant,
      includeBorder = false,
      parallaxSpeed = -10,
      tint = false,
      imageProps = {},

      ...otherProps
    },
    ref
  ) => {
    const depth = useDepth(parallaxSpeed);

    const figureClassName = join(
      classes.Figure,
      className ? className : null,
      parallaxSpeed !== 0 ? classes.hasParallax : null
    );

    return (
      <figure className={figureClassName} ref={ref} {...otherProps}>
        <Animate.ClipIn
          className={classes.FigureImage}
          isVisible={isVisible}
          instant={instant}
          direction={direction}
          transition={transition}
        >
          <Image
            ref={depth.ref}
            src={imageProps.src}
            alt={imageProps.alt}
            style={{ objectFit: "cover", ...imageProps.style }}
            quality={90}
            {...imageProps}
          />

          {tint && <span className={classes.FigureOverlay} />}
        </Animate.ClipIn>
      </figure>
    );
  }
);

Figure.displayName = "Figure";
export default Figure;
