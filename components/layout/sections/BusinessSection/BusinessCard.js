"use client";

import classes from "./BusinessSection.module.scss";

import Animate from "@/components/UI/Animate/Animate";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useDepth } from "@/hooks/useDepth";
import { join } from "@/utils/helpers";

const BusinessCard = ({ data, staggerDuration, inView, instant, index }) => {
  const depth = useDepth(index === 1 ? 10 : 5);
  const { windowSize } = useWindowSize();

  const className = join(
    classes.BusinessCardWrapper,
    classes["BusinessCardWrapper--" + (index + 1)]
  );

  return (
    <Animate.SlideIn
      ref={depth.ref}
      className={className}
      direction={windowSize > 600 ? data.direction : "up"} // FIX
      isVisible={inView}
      instant={instant}
      transition={{
        duration: 1.35,
        delay: windowSize > 600 ? data.delay : 0.75 + index * staggerDuration, // FIX
      }}
    >
      <div className={classes.BusinessCard}>
        <span className={classes.BusinessCardBackdrop} />
        <span className={classes.BusinessCardNumber}>{data.backdropText}</span>
        <h4 className="header header-4">{data.title}</h4>
        <p className="paragraph">{data.description}</p>
      </div>
    </Animate.SlideIn>
  );
};

export default BusinessCard;
