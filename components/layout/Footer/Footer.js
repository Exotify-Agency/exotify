import classes from "./Footer.module.scss";
import business from "@/data/business.json";

import Button from "@/components/UI/Elements/Button/Button";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "our story",
    href: "/#section-about",
  },
  {
    name: "contact",
    href: "/#section-contact",
  },
  {
    name: "features",
    href: "/#section-design",
  },
];

const socials = [
  // {
  //   name: "instagram",
  //   href: `www.instagram.com/${business.instagram.slice(1)}`,
  //   icon: <i className="bi bi-instagram" />,
  // },
  // {
  //   name: "email",
  //   href: `mailto:${business.email}`,
  //   icon: <i className="bi bi-envelope" />,
  // },
  {
    name: "phone",
    href: `tel:${business.phone.split(" ").join("")}`,
    icon: <i className="bi bi-telephone-fill" />,
  },
];

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContainer}>
        <div className={classes.FooterLogo}>
          <h2 className="header header-2">{business.name}</h2>
        </div>
        <span className={classes.divider} />
        <ul className={classes.FooterLinks}>
          {links.map((link) => (
            <li key={Math.random()} className={classes.FooterLink}>
              <Button buttonType="underline" href={link.href} isHashLink>
                {link.name}
              </Button>
            </li>
          ))}
        </ul>
        <span className={classes.divider} />
        <ul className={classes.FooterSocials}>
          {socials.map((social) => (
            <li key={Math.random()} className={classes.FooterSocial}>
              <Button buttonType="underline" href={social.href} isLink>
                {social.icon}
                {business[social.name]}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
