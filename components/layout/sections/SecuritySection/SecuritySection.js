"use client";

import classes from "./SecuritySection.module.scss";

import Section from "@/components/UI/Elements/Section/Section";
import Figure from "@/components/UI/Elements/Figure/Figure";
import Animate from "@/components/UI/Animate/Animate";
import { useReveal } from "@/hooks/useReveal";

const SecuritySection = () => {
  const { reveal, ref, instant } = useReveal();

  return (
    <Section className={classes.SecuritySection} ref={ref}>
      <Animate.ClipIn
        className={classes.SecurityContainer}
        direction="right"
        isVisible={reveal}
        instant={instant}
        transition={{ duration: 1.75 }}
      >
        <Figure
          className={classes.SecurityImage}
          tint
          instant
          imageProps={{
            src: "/assets/app/security-1.webp",
            alt: "an inpenetrable castle",
            sizes:
              "(max-width: 1000px) 86vw, (max-width:(max-width: 500px) 100vw, 70vw",
            fill: true,
          }}
        />
        <div className={classes.SecurityContent}>
          <Animate.SlideIn
            direction="up"
            isVisible={reveal}
            instant={instant}
            transition={{ delay: 0.25 }}
          >
            <h2 className="header header-2">Inpenetrable security</h2>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            isVisible={reveal}
            transition={{ duration: 1.75, delay: 0.5 }}
          >
            <p className="paragraph">
              Your websites is built like a strong castle. We utilize the most
              advanced tools to fend off cyber attacks that may threaten your
              business. Nothing gets in, nothing gets out.
            </p>
          </Animate.SlideIn>
        </div>
      </Animate.ClipIn>
    </Section>
  );
};

export default SecuritySection;
