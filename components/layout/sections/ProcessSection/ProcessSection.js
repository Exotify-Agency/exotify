"use client";

import classes from "./Process.module.scss";

import Section from "@/components/UI/Elements/Section/Section";
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
        direction="left"
        instant={instant || windowSize <= 700}
        transition={{ delay: 0.5 }}
      >
        <Animate.SlideIn
          isVisible={reveal}
          direction="up"
          instant={instant}
          transition={{ delay: windowSize <= 700 ? 0 : 1 }}
        >
          <h2 className="header header-2">Development process</h2>
        </Animate.SlideIn>
      </Animate.ClipIn>
      <Animate.ClipIn
        isVisible={reveal}
        direction="right"
        instant={instant}
        transition={{ duration: 1.5, delay: windowSize <= 700 ? 0.5 : 0 }}
      >
        <ProcessAccordion />
      </Animate.ClipIn>
    </Section>
  );
};

export default ProcessSection;
