"use client";

import classes from "./Header.module.scss";

import Button from "@/components/UI/Elements/Button/Button";
import Border from "@/components/UI/Styling/Border";
import Animate from "@/components/UI/Animate/Animate";

import business from "@/data/business.json";
import Image from "@/components/UI/Elements/Image";
import { useDepth } from "@/hooks/useDepth";
import { useReveal } from "@/hooks/useReveal";

// NOTE: Transition (left to right width change)
const Header = (props) => {
  const depthMain = useDepth(-10);
  const depthTitle = useDepth();

  const { reveal, ref, instant } = useReveal();

  return (
    <header className={classes.Header} ref={ref}>
      <Border
        className={classes.HeaderContent}
        padding="0rem"
        isShown={reveal}
        instant={instant}
      >
        {/* BORDERS */}
        <Animate.SlideIn
          className={classes.HeaderBorderTop}
          isVisible={reveal}
          instant={instant}
        >
          <img src="/assets/borders/border-1-top.svg" alt="Border graphic" />
        </Animate.SlideIn>
        <Animate.SlideIn
          className={classes.HeaderBorderBottom}
          isVisible={reveal}
          direction="down"
          instant={instant}
        >
          <img src="/assets/borders/border-1-bottom.svg" alt="Border graphic" />
        </Animate.SlideIn>

        {/* BACKGROUND */}
        <Animate.ClipIn
          className={classes.HeaderImage}
          direction="right"
          isVisible={reveal}
          instant={instant}
        >
          <Image
            src="/assets/images/header/header-1.webp"
            alt="Monte Carlo pier"
            priority
            ref={depthMain.ref}
          />
          <span className={classes.HeaderTint} />
        </Animate.ClipIn>

        {/* TITLEBAR */}
        <Animate.ClipIn
          className={classes.HeaderTitlebar}
          delay={0.75}
          isVisible={reveal}
          direction="right"
          ref={depthTitle.ref}
          instant={instant}
        >
          <span className={classes.HeaderShape} />
          <Animate.SlideIn isVisible={reveal} delay={1.35} instant={instant}>
            <h1 className="header header-1">{business.name}</h1>
          </Animate.SlideIn>
          <Animate.SlideIn
            isVisible={reveal}
            delay={1.35}
            direction="down"
            instant={instant}
          >
            <p className="subtitle">
              A service based agency that creates stunning websites
            </p>
          </Animate.SlideIn>
        </Animate.ClipIn>

        {/* CAPTION */}
        <Animate.SlideIn
          className={classes.HeaderCaption}
          isVisible={reveal}
          direction="right"
          instant={instant}
        >
          <div className="caption">Monte Carlo pier</div>
        </Animate.SlideIn>

        {/* BUTTON */}
        <Animate.SlideIn
          className={classes.HeaderCta}
          delay={1.5}
          isVisible={reveal}
          instant={instant}
        >
          <div className={classes.HeaderButton}>
            <Button buttonType="outline" href="/#section-design" isLink>
              see features
            </Button>
          </div>
        </Animate.SlideIn>
      </Border>
    </header>
  );
};
export default Header;
