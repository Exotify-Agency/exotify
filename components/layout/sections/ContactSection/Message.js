"use client";

import classes from "./ContactSection.module.scss";

import axios from "axios";

import { useCaptcha } from "@/hooks/useCaptcha";
import useInput from "@/hooks/useInput";

import Form from "@/components/UI/Elements/Form/Form";
import Input from "@/components/UI/Elements/Input/Input";
import Button from "@/components/UI/Elements/Button/Button";
import Titlebar from "@/components/UI/Elements/Titlebar/Titlebar";
import Border from "@/components/UI/Styling/Border";
import Figure from "@/components/UI/Elements/Figure/Figure";
import Animate from "@/components/UI/Animate/Animate";

import * as config from "@/data/config";
import { useWindowSize } from "@/hooks/useWindowSize";

const validateName = (val) => val.length > 0;
const validateMessage = (val) => val.length > 0;
const validateEmail = (val) => val.includes("@");

const Message = ({ inView, instant }) => {
  const { windowSize } = useWindowSize();

  const captcha = useCaptcha();

  const inputName = useInput(validateName);
  const inputMessage = useInput(validateMessage);
  const inputEmail = useInput(validateEmail);

  const isFormValid =
    inputName.isValid && inputMessage.isValid && inputEmail.isValid;

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Generate message
    let message = [
      "Name: " + inputName.value,
      "Email: " + inputEmail.value,
    ].join("\n");
    message += "\n \n" + inputMessage.value;

    // Make request
    axios.defaults.headers.post["Content-Type"] = "application/json";
    await axios.post(config.EMAIL_LINK, {
      name: "FormSubmit",
      message,
    });

    // Reset form
    inputName.onReset();
    inputEmail.onReset();
    inputMessage.onReset();
  };

  // Load captcha when user focuses on form
  const focusHandler = (e) => captcha.init();

  return (
    <Animate.ClipIn
      className={classes.MessageWrapper}
      direction="right"
      isVisible={windowSize <= 400 ? true : inView}
      instant={instant}
      transition={{ duration: 1.75 }}
    >
      <Border
        className={classes.Message}
        padding="2rem"
        borderStyle="double"
        isVisible={inView}
        instant={instant}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {/* BACKGROUND */}
        <Figure
          className={classes.MessageBackground}
          instant
          imageProps={{
            src: "/assets/app/message/message-1.webp",
            alt: "Luxurious hotel lobby",
            sizes: "(max-width: 400px) 100vw, 90vw",
            fill: true,
          }}
        />

        {/* TITLEBAR */}
        <Animate.ClipIn
          className={classes.MessageTitlebarWrapper}
          direction="right"
          isVisible={inView}
          instant={instant}
          transition={{ delay: 0.5 }}
        >
          <Titlebar className={classes.MessageTitlebar}>
            <Animate.SlideIn
              direction="up"
              isVisible={inView}
              instant={instant}
              transition={{ delay: 1 }}
            >
              <h2 className="header header-2 text-center">message us</h2>
            </Animate.SlideIn>
          </Titlebar>
        </Animate.ClipIn>

        {/* FORM */}
        <Form onSubmit={onSubmitHandler} onFocus={focusHandler}>
          <Animate.SlideIn
            direction="right"
            isVisible={inView}
            instant={instant}
            transition={{ delay: 0.5 }}
          >
            <Input
              placeholder="full name"
              type="text"
              name="name"
              {...inputName}
            />
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            isVisible={inView}
            instant={instant}
            transition={{ delay: 0.75 }}
          >
            <Input
              placeholder="email"
              type="text"
              name="email"
              {...inputEmail}
            />
          </Animate.SlideIn>
          <Animate.SlideIn
            direction="right"
            isVisible={inView}
            instant={instant}
            transition={{ delay: 1 }}
          >
            <Input
              placeholder="message"
              minHeight="15rem"
              type="textarea"
              name="message"
              {...inputMessage}
            />
          </Animate.SlideIn>

          <Animate.SlideIn
            className={classes.MessageButtonWrapper}
            direction="right"
            isVisible={inView}
            instant={instant}
            transition={{ delay: 1.25 }}
          >
            <Button
              buttonType="shine"
              className={classes.MessageButton}
              disabled={!isFormValid}
              data-sitekey={config.CAPTCHA_SITE_KEY}
              data-callback="onSubmit"
              data-action="submit"
              isLoading
            >
              send message
              <i className="bi bi-send-fill" />
            </Button>
          </Animate.SlideIn>
        </Form>
      </Border>
    </Animate.ClipIn>
  );
};

export default Message;
