import classes from "./Nav.module.scss";

import Button from "@/components/UI/Elements/Button";
import Animate from "@/components/UI/Animate/Animate";

const links = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "our story",
    href: "/#section-about",
  },
  {
    text: "contact us",
    href: "/#section-contact",
  },
  {
    text: "test",
    href: "/test",
  },
];

const Nav = (props) => {
  const navClassName = [classes.Nav, classes.home].join(" ");

  const linkItems = links.map((link) => (
    <li key={Math.random()} className={classes.NavLink}>
      <Button buttonType="underline" href={link.href} isLink>
        {link.text}
      </Button>
    </li>
  ));

  return (
    <nav className={navClassName}>
      <Animate.SlideIn direction="up" className={classes.NavContainer}>
        <ul className={classes.NavLinks}>{linkItems}</ul>
      </Animate.SlideIn>
    </nav>
  );
};

export default Nav;
