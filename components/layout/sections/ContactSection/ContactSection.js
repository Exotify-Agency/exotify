"use client";

import classes from "./ContactSection.module.scss";

import Section from "@/components/UI/Elements/Section";
import Message from "./Message";

import Alternatives from "./Alternatives";
import { useReveal } from "@/hooks/useReveal";

const ContactSection = () => {
  const { reveal, ref, instant } = useReveal();

  return (
    <Section className={classes.ContactSection} name="contact" ref={ref}>
      <Message inView={reveal} instant={instant} />
      <Alternatives />
    </Section>
  );
};

export default ContactSection;
