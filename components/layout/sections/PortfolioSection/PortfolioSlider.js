import Slider from "@/components/UI/Elements/Slider/Slider";
import classes from "./PortfolioSection.module.scss";

import { useSlider } from "@/hooks/useSlider";
import Button from "@/components/UI/Elements/Button/Button";
import Project from "./Project";

const data = [
  {
    name: "Natours",
    summary: "Tour booking website",
    image: "/assets/images/portfolio/project-1/project-1.webp",
    description:
      "A website that combines multiple aspects of technological advances in order to provide a solid and smooth booking experience",
    link: "https://natours.netlify.app/",
  },
  {
    name: "Nexter",
    summary: "Real estate firm",
    image: "/assets/images/portfolio/project-2/project-2.webp",
    description:
      "A luxurious website that cuts straight to the point. It features an interactive home listing grid layout that highlights the key parts of any home.",
    link: "https://nexter.netlify.app/",
  },
  {
    name: "Trillo",
    summary: "Vacation rating website",
    image: "/assets/images/portfolio/project-3/project-3.webp",
    description:
      "Rate vacations that you've went to, as well as look at other vacations. You can see every metric needed in order to make an informed decision on your getaway!",
    link: "https://trillo.netlify.app/",
  },
  {
    name: "Exotify",
    summary: "Web design agency",
    image: "/assets/images/portfolio/project-4/project-4.webp",
    description:
      "A website that includes almost every feature imaginable at a stunning scale. This is sure to convince unsure customers to choose them instead of other web design agencies.",
    link: "https://exotify.ca/",
  },
];

const PortfolioSlider = () => {
  const slides = data.map((data, i) => <Project key={i} {...data} />);

  const classNames = {
    activeSlide: classes.active,
    activeDot: classes.active,
    slider: classes.PortfolioSlider,
    dots: classes.PortfolioDots,
  };

  const elements = {
    dot: <Button buttonType="dot" />,
  };

  const options = {
    visibleSlides: 5,
    activeSlide: 2,
    infiniteLoop: true,
    // autoScroll: true,
    duration: 1, // edit in css too
    gap: "calc(var(--pd-limit-width) * 2)",
    hideButtons: true,
  };

  const slider = useSlider({ slides, classNames, options, elements });

  return <Slider {...slider} />;
};

export default PortfolioSlider;
