"use client";

import classes from "./Header.module.scss";

import Button from "@/components/UI/Elements/Button/Button";
import ImageLoader from "@/components/UI/Elements/ImageLoader/ImageLoader";
import Border from "@/components/UI/Styling/Border";
import Animate from "@/components/UI/Animate/Animate";

import business from "@/data/business.json";
import Image from "next/image";
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
        isVisible={reveal}
        instant={instant}
      >
        {/* BORDERS */}
        <Animate.SlideIn
          className={classes.HeaderBorderTop}
          isVisible={reveal}
          instant={instant}
          innerProps={{ style: { position: "relative" } }}
        >
          <Image
            src="/assets/borders/border-1-top.svg"
            alt="Border graphic"
            style={{ objectFit: "contain" }}
            loading="eager"
            priority
            fill
          />
        </Animate.SlideIn>
        <Animate.SlideIn
          className={classes.HeaderBorderBottom}
          isVisible={reveal}
          direction="down"
          instant={instant}
          innerProps={{ style: { position: "relative" } }}
        >
          <Image
            src="/assets/borders/border-1-bottom.svg"
            alt="Border graphic"
            style={{ objectFit: "contain" }}
            loading="eager"
            priority
            fill
          />
        </Animate.SlideIn>

        {/* BACKGROUND */}
        <Animate.ClipIn
          className={classes.HeaderImage}
          direction="right"
          isVisible={reveal}
          instant={instant}
        >
          <ImageLoader // Custom loader that adheres to changing aspect ratio
            ref={depthMain.ref}
            src="/assets/app/header/header-1.webp"
            alt="Monte Carlo pier"
            // sizes="(max-width: 800px) 95vw, (max-width: 300px) 100vw, 75vw"
            style={{ objectFit: "cover", scale: "1.1" }}
            loading="eager"
            priority
          />
          <span className={classes.HeaderTint} />
        </Animate.ClipIn>

        {/* TITLEBAR */}
        <Animate.ClipIn
          className={classes.HeaderTitlebar}
          isVisible={reveal}
          instant={instant}
          direction="right"
          transition={{ delay: 0.75, ease: "easeInOut" }}
          ref={depthTitle.ref}
        >
          <span className={classes.HeaderShape} />
          <Animate.SlideIn
            isVisible={reveal}
            instant={instant}
            transition={{ delay: 1.35 }}
          >
            <h1 className="header header-1">{business.name}</h1>
          </Animate.SlideIn>
          <Animate.SlideIn
            isVisible={reveal}
            instant={instant}
            direction="down"
            transition={{ delay: 1.35 }}
          >
            <p className="subtitle">
              A web design and digital marketing agency
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
          transition={{ delay: 1.5 }}
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
