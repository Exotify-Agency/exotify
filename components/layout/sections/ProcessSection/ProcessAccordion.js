"use client";

import classes from "./Process.module.scss";

import React, { useEffect, useState } from "react";

import ProcessStage from "./ProcessStage";

const stages = [
  {
    title: "Interview",
    description:
      "In this stage, we conduct a thorough interview to understand your website needs, goals, and preferences. We listen to your ideas and gather all the necessary information to create a website that reflects your vision.",
    image: "/assets/images/process-1.webp",
  },
  {
    title: "Development",
    description:
      "Our skilled team brings your website to life using cutting-edge technologies. We focus on creating an intuitive user interface, implementing robust functionalities, and ensuring responsive design and optimal performance.",
    image: "/assets/images/process-2.webp",
  },
  {
    title: "Review",
    description:
      "During the review stage, we refine and polish your website before launch. We conduct comprehensive tests, address design consistency and user experience, and provide you with a preview for final feedback and necessary revisions. Your satisfaction is our priority. We deliver exceptional websites through our meticulous interview, development, and review process. Your website will be tailored to your needs, visually appealing, and user-friendly.",
    image: "/assets/images/process-3.webp",
  },
];

const ProcessAccordion = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const duration = 0.6;

  const onClickHandler = (i) => {
    setActiveStage(i);
  };
  useEffect(() => {
    setIsDisabled(true);
    const timeout = setTimeout(() => setIsDisabled(false), duration * 1000);
    return () => clearTimeout(timeout);
  }, [activeStage]);

  return (
    <div className={classes.Process}>
      <div className={classes.Stages}>
        {stages.map((stage, i) => (
          <ProcessStage
            key={i}
            index={i}
            duration={duration}
            onClick={onClickHandler.bind(null, i)}
            stage={stage}
            isActive={i === activeStage}
            isDisabled={isDisabled}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessAccordion;
