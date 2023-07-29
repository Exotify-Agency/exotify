"use client";

import classes from "./SpeedSection.module.scss";

import Animate from "@/components/UI/Animate/Animate";
import Figure from "@/components/UI/Elements/Figure/Figure";
import Section from "@/components/UI/Elements/Section/Section";
import { useReveal } from "@/hooks/useReveal";

const SpeedSection = () => {
  const { reveal, ref, instant } = useReveal();

  return (
    <Section name="speed" className={classes.SpeedSection} ref={ref}>
      <Figure
        className={classes.SpeedImage}
        src="/assets/images/speed-1.webp"
        alt="red ferrari"
        direction="down"
        duration={1.75}
        isVisible={reveal}
        instant={instant}
      />

      <div className={classes.SpeedMain}>
        <Animate.ClipIn
          className={classes.SpeedShape}
          direction="left"
          duration={1.25}
          delay={0.25}
          isVisible={reveal}
          instant={instant}
        />
        <div className={classes.SpeedContent}>
          <Animate.SlideIn
            direction="up"
            delay={0.75}
            isVisible={reveal}
            instant={instant}
          >
            <h2 className="header header-2">Built for speed</h2>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            delay={1.1}
            duration={1.75}
            isVisible={reveal}
            instant={instant}
          >
            <p className="paragraph">
              We engineer our websites with the user in mind. This means
              creating a responsive website that loads quickly, so that you can
              catch your customer&apos;s attention quickly. We do this by using
              some of the latest technological marvels known for building
              websites.
            </p>
          </Animate.SlideIn>
        </div>
      </div>
    </Section>
  );
};

export default SpeedSection;
