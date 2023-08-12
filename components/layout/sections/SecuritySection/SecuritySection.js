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
        duration={1.75}
        isVisible={reveal}
        instant={instant}
      >
        <Figure
          src="/assets/app/security/security-1.webp"
          className={classes.SecurityImage}
          alt="an inpenetrable castle"
          tint
        />
        <div className={classes.SecurityContent}>
          <Animate.SlideIn
            direction="up"
            delay={0.25}
            isVisible={reveal}
            instant={instant}
          >
            <h2 className="header header-2">Inpenetrable security</h2>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            delay={0.5}
            duration={1.75}
            isVisible={reveal}
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
