"use client";

import Section from "@/components/UI/Elements/Section";
import classes from "./DesignSection.module.scss";
import Figure from "@/components/UI/Elements/Figure";

import Animate from "@/components/UI/Animate/Animate";
import { useReveal } from "@/hooks/useReveal";
import { useWindowSize } from "@/hooks/useWindowSize";

const DesignSection = () => {
  const { windowSize } = useWindowSize();
  const { reveal, ref, instant } = useReveal();

  return (
    <Section name="design" className={classes.DesignSection} ref={ref}>
      <Figure
        className={classes.DesignImage}
        src="/assets/images/design-1.webp"
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
              Our website development agency provides custom web design services
              that are tailored to the unique needs and goals of each client.
              Our team of experienced designers will work with you to create a
              visually stunning and user-friendly website that reflects your
              brand identity and engages your target audience.
            </p>
          </Animate.SlideIn>
        </div>
      </div>
    </Section>
  );
};

export default DesignSection;
