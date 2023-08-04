"use client";

import classes from "./PortfolioSection.module.scss";

import Section from "@/components/UI/Elements/Section/Section";
import PortfolioSlider from "./PortfolioSlider";

const PortfolioSection = () => {
  return (
    <Section className={classes.PortfolioSection} name="portfolio">
      <h2 className="header header-2">Our Projects</h2>
      <PortfolioSlider />
    </Section>
  );
};

export default PortfolioSection;
