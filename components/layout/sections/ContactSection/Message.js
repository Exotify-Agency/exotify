"use client";

import classes from "./ContactSection.module.scss";

import axios from "axios";

import { useCaptcha } from "@/hooks/useCaptcha";
import useInput from "@/hooks/useInput";

import Form from "@/components/UI/Elements/Form";
import Input from "@/components/UI/Elements/Input/Input";
import Button from "@/components/UI/Elements/Button/Button";
import TitleBar from "@/components/UI/Elements/TitleBar";
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
      duration={1.75}
      isVisible={windowSize <= 400 ? true : inView}
      instant={instant}
    >
      <Border
        className={classes.Message}
        padding="2rem"
        borderStyle="double"
        delay={0.5}
        duration={2}
        isShown={inView}
        instant={instant}
      >
        {/* BACKGROUND */}
        <Figure
          className={classes.MessageBackground}
          src="/assets/images/message-1.webp"
          alt="Luxurious hotel lobby"
        />

        {/* TITLEBAR */}
        <Animate.ClipIn
          className={classes.MessageTitlebarWrapper}
          direction="right"
          delay={0.5}
          isVisible={inView}
          instant={instant}
        >
          <TitleBar className={classes.MessageTitlebar}>
            <Animate.SlideIn
              direction="up"
              delay={1}
              isVisible={inView}
              instant={instant}
            >
              <h2 className="header header-2 text-center">message us</h2>
            </Animate.SlideIn>
          </TitleBar>
        </Animate.ClipIn>

        {/* FORM */}
        <Form onSubmit={onSubmitHandler} onFocus={focusHandler}>
          <Animate.SlideIn
            direction="right"
            delay={0.5}
            isVisible={inView}
            instant={instant}
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
            delay={0.75}
            isVisible={inView}
            instant={instant}
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
            delay={1}
            isVisible={inView}
            instant={instant}
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
            delay={1.25}
            isVisible={inView}
            instant={instant}
          >
            <Button
              buttonType="shine"
              className={classes.MessageButton}
              disabled={!isFormValid}
              data-sitekey={config.CAPTCHA_SITE_KEY}
              data-callback="onSubmit"
              data-action="submit"
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
