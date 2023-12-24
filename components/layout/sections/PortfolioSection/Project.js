import Button from "@/components/UI/Elements/Button/Button";
import classes from "./PortfolioSection.module.scss";
import Image from "next/image";
import Border from "@/components/UI/Styling/Border";
import Animate from "@/components/UI/Animate/Animate";
import { join } from "@/utils/helpers";

const delays = [0.5, 0.3, 0, 0.3, 0.5];

const Project = ({
  slide,
  isVisible,
  isActive,
  className,
  reveal,
  instant,
  duration,
  data,
}) => {
  const delay = delays[slide];

  return (
    <Animate.SlideIn
      isVisible={reveal}
      instant={instant}
      direction="up"
      transition={{ delay: delay + 0.35 }}
    >
      <div
        className={join(
          classes.ProjectWrapper,
          isActive ? classes.active : null
        )}
      >
        <Border
          className={join(className, classes.Project)}
          isVisible={isActive}
          padding="0rem"
          borderStyle="double"
          transition={{ duration }}
        >
          <div className={classes.ProjectHeader}>
            <div className={classes.ProjectImage}>
              <Image
                src={data.image}
                alt={data.name}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 800px) 30vw, (max-width: 400px) 40vw, 15vw"
                fill
              />
            </div>
            <div className={classes.ProjectName}>
              <h3 className="header header-3">{data.name}</h3>
            </div>
          </div>
          <p className="paragraph">{data.description}</p>
          <Button href={data.link} buttonType="shine" isLink>
            visit
          </Button>
        </Border>
      </div>
    </Animate.SlideIn>
  );
};

export default Project;
