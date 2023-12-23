"use client";

import classes from "./AboutSection.module.scss";

import Section from "@/components/UI/Elements/Section/Section";
import Figure from "@/components/UI/Elements/Figure/Figure";
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
          transition={{ duration: 1.25 }}
          instant={instant}
        />
        <Animate.ClipIn
          className={classes.AboutImageWrapper}
          isVisible={reveal}
          direction="down"
          transition={{ duration: 1.25, delay: 0.75 }}
          instant={instant}
        >
          <Figure
            className={classes.AboutImage}
            tint
            imageProps={{
              src: "/assets/app/about/about-1.webp",
              alt: "Image of car beside cartier store",
              sizes: "(max-width: 800px) 45vw, (max-width: 400px) 80vw, 33vw",
              fill: true,
            }}
          />
        </Animate.ClipIn>
        <div className={classes.AboutContent}>
          <Animate.SlideIn
            direction="up"
            transition={{ delay: 0.75 }}
            isVisible={reveal}
            instant={instant}
          >
            <h2 className="header header-2">Our Story</h2>
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            transition={{ duration: 1.5, delay: 1 }}
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
            transition={{ duration: 1.5, delay: 1.25 }}
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
