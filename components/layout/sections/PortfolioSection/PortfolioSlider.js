import Slider from "@/components/UI/Elements/Slider/Slider";
import classes from "./PortfolioSection.module.scss";

import { useSlider } from "@/hooks/useSlider";
import Button from "@/components/UI/Elements/Button/Button";
import Project from "./Project";

const dataSlides = [
  {
    name: "Nexter",
    summary: "Real estate firm",
    image: "/assets/app/portfolio/nexter.webp",
    description:
      "A luxurious website that cuts straight to the point. It features an interactive home listing grid layout that highlights the key parts of any home.",
    link: "https://nexter.netlify.app/",
  },
  {
    name: "Trillo",
    summary: "Vacation rating website",
    image: "/assets/app/portfolio/trillo.webp",
    description:
      "Rate vacations that you've went to, as well as look at other vacations. You can see every metric needed in order to make an informed decision on your getaway!",
    link: "https://trillo.netlify.app/",
  },
  {
    name: "Arian Rocks",
    summary: "Personal portfolio",
    image: "/assets/app/portfolio/arian-fallahpour.png",
    description:
      "A portfolio website designed to show the different skills and projects Arian Fallahpour has done. He also happens to be the founder of Exotify!",
    link: "https://arian.rocks/",
  },
  {
    name: "AB Fades",
    summary: "Haircut business",
    image: "/assets/app/portfolio/abfades.png",
    description:
      "A talented barber that has cut hair for many nationally and internationally known people. If you need a good haircut, you can rely on him.",
    link: "https://abfades.vercel.app/",
  },
  {
    name: "VIP Realtors",
    summary: "Real Estate Team",
    image: "/assets/app/portfolio/vip-realtors.png",
    description:
      "A website that combines multiple aspects of technological advances in order to provide a solid and smooth booking experience",
    link: "https://viprealtorsgta.com/",
  },
  {
    name: "Natours",
    summary: "Tour booking app",
    image: "/assets/app/portfolio/natours.webp",
    description:
      "A website that books fake tours. It has email, payments, database and userbase functionality.",
    link: "https://natours.netlify.app/",
  },

  {
    name: "Exotify",
    summary: "Web design agency",
    image: "/assets/app/portfolio/exotify.webp",
    description:
      "A website that includes almost every feature imaginable at a stunning scale. This is sure to convince unsure customers to choose them instead of other web design agencies.",
    link: "https://exotify.ca/",
  },
];

const PortfolioSlider = ({ reveal, instant }) => {
  const options = {
    visibleSlides: 5,
    activeSlide: 2,
    infiniteLoop: true,
    autoScroll: true,
    duration: 1, // edit in css too
    gap: "calc(var(--pd-limit-width) * 2)",
    hideButtons: true,
  };

  const slides = dataSlides.map((data, i) => (
    <Project
      key={i}
      reveal={reveal}
      duration={options.duration}
      instant={instant}
      data={data}
    />
  ));

  const classNames = {
    activeSlide: classes.active,
    activeDot: classes.active,
    slider: classes.PortfolioSlider,
    dots: classes.PortfolioDots,
  };

  const elements = {
    dot: <Button buttonType="dot" />,
  };

  const slider = useSlider({ slides, classNames, options, elements });

  return <Slider {...slider} />;
};

export default PortfolioSlider;
