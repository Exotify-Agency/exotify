"use client";

import Section from "@/components/UI/Elements/Section/Section";
import classes from "./DesignSection.module.scss";
import Figure from "@/components/UI/Elements/Figure/Figure";

import Animate from "@/components/UI/Animate/Animate";
import { useReveal } from "@/hooks/useReveal";
import { useWindowSize } from "@/hooks/useWindowSize";

const DesignSection = () => {
  const { windowSize } = useWindowSize();
  const { reveal, ref, instant } = useReveal();

  return (
    <Section className={classes.DesignSection} name="design" ref={ref}>
      <Figure
        className={classes.DesignImage}
        src="/assets/app/design/design-1.webp"
        alt="renaissance style art painting"
        direction="left"
        duration={1.5}
        isVisible={reveal}
        instant={instant}
        tint={windowSize < 600 ? true : null}
      />

      <div className={classes.DesignMain}>
        <Animate.ClipIn
          className={classes.DesignShape}
          direction="right"
          duration={1.5}
          delay={0.25}
          isVisible={reveal}
          instant={instant}
        />
        <div className={classes.DesignContent}>
          <Animate.SlideIn
            direction="up"
            delay={0.75}
            isVisible={reveal}
            instant={instant}
          >
            <h2 className="header header-2">Customized to perfection</h2>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            delay={1}
            duration={1.5}
            isVisible={reveal}
            instant={instant}
          >
            <p className="paragraph">
              Your website is tailored with your goals in mind. You need
              customers that trust you and stay loyal due to your outstanding
              service.
            </p>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            delay={1.25}
            duration={1.5}
            isVisible={reveal}
            instant={instant}
          >
            <p className="paragraph">
              Having a website design that looks professional is crucial for
              this to occur, since it lays the foundation for what your clients
              perceive your business to be.
            </p>
          </Animate.SlideIn>
        </div>
      </div>
    </Section>
  );
};

export default DesignSection;
