import Button from "@/components/UI/Elements/Button/Button";
import classes from "./PortfolioSection.module.scss";
import Image from "@/components/UI/Elements/Image";

const Project = ({
  isVisible,
  isActive,
  className,
  image,
  name,
  summary,
  link,
  description,
  ...otherProps
}) => {
  return (
    <div
      className={[className, classes.Project].join(" ").trim()}
      {...otherProps}
    >
      {/* FIX IMAGE SIZING BC IT CAUSES SLIDER TO LAG DURING ANIMATIONS */}
      <div className={classes.ProjectImage}>
        <Image src={image} alt={name} noSrcSet />
      </div>
      <div className={classes.ProjectName}>
        <h3 className="header header-3">{name}</h3>
      </div>
      <p className="paragraph">{description}</p>
      <Button href={link} buttonType="shine" isLink>
        visit
      </Button>
    </div>
  );
};

export default Project;
