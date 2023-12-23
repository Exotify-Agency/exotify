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
        imageProps={{
          src: "/assets/app/speed/speed-1.webp",
          alt: "red ferrari",
          sizes:
            "(max-width: 1000px) 56vw, (max-width: 800px) 80vw, (max-width: 400px) 90vw, 50vw",
          fill: true,
        }}
        direction="down"
        isVisible={reveal}
        instant={instant}
        transition={{ duration: 1.75 }}
      />

      <div className={classes.SpeedMain}>
        <Animate.ClipIn
          className={classes.SpeedShape}
          direction="left"
          isVisible={reveal}
          instant={instant}
          transition={{ duration: 1.25, delay: 0.25 }}
        />
        <div className={classes.SpeedContent}>
          <Animate.SlideIn
            direction="up"
            isVisible={reveal}
            instant={instant}
            transition={{ delay: 0.75 }}
          >
            <h2 className="header header-2">Built for speed</h2>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            isVisible={reveal}
            instant={instant}
            transition={{ duration: 1.75, delay: 1.1 }}
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
