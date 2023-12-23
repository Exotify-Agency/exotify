"use client";

import classes from "./ContactSection.module.scss";

import business from "@/data/business.json";
import Button from "@/components/UI/Elements/Button/Button";
import { useInView } from "react-intersection-observer";
import Animate from "@/components/UI/Animate/Animate";

const Alternatives = () => {
  const { inView, ref } = useInView({ triggerOnce: true });

  return (
    <Animate.SlideIn
      ref={ref}
      className={classes.AlternativesWrapper}
      direction="down"
      isVisible={inView}
    >
      <div className={classes.Alternatives}>
        {/* <div className={classes.Alternative}>
          <Button buttonType="underline" href={`mailto:${business.email}`} isLink>
            {business.email}
          </Button>
        </div>
        <span className={classes.divider} />
        <div className={classes.Alternative}>
          <Button
            buttonType="underline"
            href={`www.instagram.com/${business.instagram.slice(1)}/`}
            isLink
          >
            {business.instagram}
          </Button>
        </div> 
        <span className={classes.divider} /> */}
        <div className={classes.Alternative}>
          <Button
            buttonType="underline"
            href={`tel:${business.phone.split(" ").join("")}`}
            isLink
          >
            {business.phone}
          </Button>
        </div>
      </div>
    </Animate.SlideIn>
  );
};

export default Alternatives;
