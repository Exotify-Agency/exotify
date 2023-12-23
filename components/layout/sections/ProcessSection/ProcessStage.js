import classes from "./Process.module.scss";

import Figure from "@/components/UI/Elements/Figure/Figure";

const ProcessStage = ({
  stage,
  isActive,
  isDisabled,
  index,
  transition,
  onClick: onClickHandler,
}) => {
  const className = [
    classes.Stage,
    isActive ? classes.active : "",
    isDisabled ? classes.disabled : "",
  ].join(" ");

  return (
    <div
      className={className}
      onClick={onClickHandler}
      onFocus={onClickHandler}
      style={{ transition: `flex ${transition.duration}s` }}
      tabIndex="0"
    >
      <Figure
        className={classes.StageBackground}
        style={{
          transition: `scale ${transition.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        }}
        instant
        imageProps={{
          src: stage.image,
          alt: stage.title + " stage",
          sizes: "(max-width: 700px) 90vw, 80vw",
          fill: true,
        }}
      />

      <div className={classes.StageNumber}>{"0" + (index + 1)}</div>
      <div
        className={classes.StageContent}
        style={{
          transition: `
            max-width ${transition.duration}s,
            max-height ${transition.duration}s,
            height ${transition.duration}s
          `,
        }}
      >
        <h3 className="header header-3">{stage.title}</h3>
        <p className="paragraph">{stage.description}</p>
      </div>
    </div>
  );
};

export default ProcessStage;
