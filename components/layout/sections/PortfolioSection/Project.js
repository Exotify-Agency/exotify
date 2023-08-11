import Button from "@/components/UI/Elements/Button/Button";
import classes from "./PortfolioSection.module.scss";
import Image from "@/components/UI/Elements/Image";
import Border from "@/components/UI/Styling/Border";

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
    <Border
      className={[className, classes.Project].join(" ").trim()}
      isVisible={isActive}
      padding="2rem"
      borderStyle="double"
      {...otherProps}
    >
      {/* FIX IMAGE SIZING BC IT CAUSES SLIDER TO LAG DURING ANIMATIONS */}
      <div className={classes.ProjectImage}>
        <Image src={image} alt={name} />
      </div>
      <div className={classes.ProjectName}>
        <h3 className="header header-3">{name}</h3>
      </div>
      <p className="paragraph">{description}</p>
      <Button href={link} buttonType="shine" isLink>
        visit
      </Button>
    </Border>
  );
};

export default Project;
