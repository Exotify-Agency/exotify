"use client";

import classes from "./BusinessSection.module.scss";

import Section from "@/components/UI/Elements/Section/Section";
import Animate from "@/components/UI/Animate/Animate";
import BusinessCard from "./BusinessCard";
import { useReveal } from "@/hooks/useReveal";

const staggerDuration = 0.3;
const cards = [
  {
    title: "Search engine optimization",
    description:
      "We incorporate best practices in SEO into all of our websites to help improve search engine rankings and drive more traffic to your website.",
    icon: <i className="bi bi-search" />,
    backdropText: "01",
    delay: 0.75 + 0 * staggerDuration,
    direction: "up",
  },
  {
    title: "Social media integration",
    description:
      "We can integrate your social media profiles into your website, allowing visitors to share your content and follow you on social media platforms.",
    icon: <i className="bi bi-chat-heart" />,
    backdropText: "02",
    delay: 0.75 + 2 * staggerDuration,
    direction: "up",
  },
  {
    title: "Analytics and reporting",
    description:
      "We provide robust analytics and reporting tools that help you track website performance, measure ROI, and optimize your digital marketing strategies.",
    icon: <i class="bi bi-bar-chart-line" />,
    backdropText: "03",
    delay: 0.75 + 1 * staggerDuration,
    direction: "down",
  },
];

const BusinessSection = () => {
  const { reveal, ref, instant } = useReveal();

  return (
    <Section name="business" className={classes.BusinessSection} ref={ref}>
      {/* TITLEBAR */}
      <div className={classes.BusinessTitlebar}>
        <Animate.ClipIn
          className={classes.BusinessShape}
          direction="left"
          isVisible={reveal}
          duration={0.75}
          instant={instant}
        />
        <Animate.SlideIn
          className={classes.BusinessTitle}
          direction="up"
          delay={0.5}
          isVisible={reveal}
          instant={instant}
        >
          <h2 className="header header-2">Enhanced business tools</h2>
        </Animate.SlideIn>
      </div>

      {/* CARDS */}
      <div className={classes.BusinessCards}>
        {cards.map((card, i) => (
          <BusinessCard
            key={i}
            index={i}
            data={card}
            staggerDuration={staggerDuration}
            inView={reveal}
            instant={instant}
          />
        ))}
      </div>
    </Section>
  );
};

export default BusinessSection;
