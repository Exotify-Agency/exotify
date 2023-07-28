import { useState } from "react";
import * as config from "@/data/config";

export const useCaptcha = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const initHandler = () => {
    if (isLoaded) return;

    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.google.com/recaptcha/api.js?render=${config.CAPTCHA_SITE_KEY}`;

    setIsLoaded(true);
    head.appendChild(script);
  };

  return {
    init: initHandler,
  };
};
