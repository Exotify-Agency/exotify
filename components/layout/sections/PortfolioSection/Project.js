import Button from "@/components/UI/Elements/Button/Button";
import classes from "./PortfolioSection.module.scss";
import Image from "@/components/UI/Elements/Image";
import Border from "@/components/UI/Styling/Border";
import Animate from "@/components/UI/Animate/Animate";

const delays = [0.5, 0.3, 0, 0.3, 0.5];

const Project = ({
  slide,
  isVisible,
  isActive,
  className,

  reveal,
  instant,

  image,
  name,
  summary,
  link,
  description,
  ...otherProps
}) => {
  const delay = delays[slide];

  return (
    <Animate.SlideIn
      isVisible={reveal}
      instant={instant}
      direction="up"
      delay={delay + 0.35}
    >
      <div className={classes.ProjectWrapper}>
        <Border
          className={[className, classes.Project].join(" ").trim()}
          isVisible={isActive}
          padding="2rem"
          borderStyle="double"
          {...otherProps}
        >
          <div className={classes.ProjectImage}>
            <Image src={image} alt={name} />
            <div className={classes.ProjectName}>
              <h3 className="header header-3">{name}</h3>
            </div>
          </div>
          <p className="paragraph">{description}</p>
          <Button href={link} buttonType="shine" isLink>
            visit
          </Button>
        </Border>
      </div>
    </Animate.SlideIn>
  );
};

export default Project;
