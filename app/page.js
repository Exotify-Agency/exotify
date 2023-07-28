import { Fragment } from "react";

import business from "@/data/business.json";

import Header from "@/components/layout/Header/Header";
import ContactSection from "@/components/layout/sections/ContactSection/ContactSection";
import AboutSection from "@/components/layout/sections/AboutSection/AboutSection";
import ProcessSection from "@/components/layout/sections/ProcessSection/ProcessSection";
import DesignSection from "@/components/layout/sections/DesignSection.js/DesignSection";
import BusinessSection from "@/components/layout/sections/BusinessSection/BusinessSection";
import SpeedSection from "@/components/layout/sections/SpeedSection/SpeedSection";
import SecuritySection from "@/components/layout/sections/SecuritySection/SecuritySection";

export const metadata = {
  title: `Home | ${business.name}`,
  description: "Homepage of Exotify.ca",
};

export default function Home() {
  return (
    <Fragment>
      <Header />
      <AboutSection />

      {/* FEATURES */}
      <DesignSection />
      <BusinessSection />
      <SpeedSection />
      <SecuritySection />

      {/* <PortfolioSection /> */}
      <ProcessSection />
      <ContactSection />
    </Fragment>
  );
}
