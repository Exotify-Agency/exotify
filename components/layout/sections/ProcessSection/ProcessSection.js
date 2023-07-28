"use client";

import classes from "./Process.module.scss";

import Section from "@/components/UI/Elements/Section";
import ProcessAccordion from "./ProcessAccordion";
import { useReveal } from "@/hooks/useReveal";
import Animate from "@/components/UI/Animate/Animate";
import { useWindowSize } from "@/hooks/useWindowSize";

const ProcessSection = () => {
  const { windowSize } = useWindowSize();
  const { reveal, ref, instant } = useReveal();

  return (
    <Section name="process" className={classes.ProcessSection} ref={ref}>
      <Animate.ClipIn
        className={classes.ProcessTitlebar}
        isVisible={reveal}
        delay={0.5}
        direction="left"
        instant={instant || windowSize <= 700}
      >
        <Animate.SlideIn
          isVisible={reveal}
          delay={windowSize <= 700 ? 0 : 1}
          direction="up"
          instant={instant}
        >
          <h2 className="header header-2">Development process</h2>
        </Animate.SlideIn>
      </Animate.ClipIn>
      <Animate.ClipIn
        isVisible={reveal}
        direction="right"
        duration={1.5}
        delay={windowSize <= 700 ? 0.5 : 0}
        instant={instant}
      >
        <ProcessAccordion />
      </Animate.ClipIn>
    </Section>
  );
};

export default ProcessSection;
