"use client";

import classes from "./PortfolioSection.module.scss";

import Section from "@/components/UI/Elements/Section/Section";
import PortfolioSlider from "./PortfolioSlider";
import { useReveal } from "@/hooks/useReveal";
import Animate from "@/components/UI/Animate/Animate";

const PortfolioSection = () => {
  const { reveal, ref, instant } = useReveal();

  return (
    <Section className={classes.PortfolioSection} name="portfolio" ref={ref}>
      <div className={classes.Titlebar}>
        <Animate.SlideIn
          className={classes.TitlebarLeftWrapper}
          isVisible={reveal}
          instant={instant}
          direction="left"
          transition={{ delay: 0.5 }}
        >
          <span className={classes.TitlebarLeft} />
        </Animate.SlideIn>
        <Animate.SlideIn
          className={classes.TitlebarRightWrapper}
          isVisible={reveal}
          instant={instant}
          direction="right"
          transition={{ delay: 0.5 }}
        >
          <span className={classes.TitlebarRight} />
        </Animate.SlideIn>
        <Animate.SlideIn
          isVisible={reveal}
          instant={instant}
          direction="down"
          transition={{ duration: 0.5 }}
        >
          <div className={classes.TitlebarMain}>
            <Animate.SlideIn
              isVisible={reveal}
              instant={instant}
              direction="up"
              transition={{ delay: 0.5 }}
            >
              <h2 className="header header-2">Our Work</h2>
            </Animate.SlideIn>
          </div>
        </Animate.SlideIn>
      </div>
      <PortfolioSlider reveal={reveal} instant={instant} />
    </Section>
  );
};

export default PortfolioSection;
