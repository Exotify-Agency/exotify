"use client";

import classes from "./AboutSection.module.scss";

import Section from "@/components/UI/Elements/Section";
import Figure from "@/components/UI/Elements/Figure";
import Animate from "@/components/UI/Animate/Animate";

import business from "@/data/business.json";
import { useReveal } from "@/hooks/useReveal";

const AboutSection = () => {
  const { reveal, ref, instant } = useReveal();

  return (
    <Section name="about" className={classes.AboutSection} ref={ref}>
      <div className={classes.AboutContainer}>
        <Animate.ClipIn
          className={classes.AboutShape}
          isVisible={reveal}
          direction="right"
          duration={1.25}
          instant={instant}
        />
        <Animate.ClipIn
          className={classes.AboutImageWrapper}
          isVisible={reveal}
          direction="down"
          duration={1.25}
          delay={0.75}
          instant={instant}
        >
          <Figure
            className={classes.AboutImage}
            src="/assets/images/about-1.webp"
            alt="Image of car beside cartier store"
            tint
          />
        </Animate.ClipIn>
        <div className={classes.AboutContent}>
          <Animate.SlideIn
            direction="up"
            delay={0.75}
            isVisible={reveal}
            instant={instant}
          >
            <h2 className="header header-2">Our Story</h2>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            delay={1}
            duration={1.5}
            isVisible={reveal}
            instant={instant}
          >
            <p className="paragraph">
              Welcome to {business.name}, where we craft exquisite digital
              experiences that elevate your online presence. With a passion for
              artistry and a commitment to precision, we are a team of dedicated
              professionals who specialize in creating elegant and captivating
              websites for individuals like you.
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
              Whether you&apos;re a visionary entrepreneur, a creative
              professional, or an esteemed organization, trust {business.name}{" "}
              to create a digital masterpiece that transcends the ordinary and
              leaves an indelible mark on the digital landscape. Join us on this
              extraordinary journey, where elegance meets innovation, and let us
              bring your digital dreams to life.
            </p>
          </Animate.SlideIn>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
