import classes from "./Process.module.scss";

import Figure from "@/components/UI/Elements/Figure/Figure";

const ProcessStage = ({
  stage,
  isActive,
  isDisabled,
  index,
  duration,
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
      style={{ transition: `flex ${duration}s` }}
      tabIndex="0"
    >
      <Figure
        className={classes.StageBackground}
        src={stage.image}
        alt={stage.title + " stage"}
        style={{
          transition: `scale ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        }}
      />

      <div className={classes.StageNumber}>{"0" + (index + 1)}</div>
      <div
        className={classes.StageContent}
        style={{
          transition: `
            max-width ${duration}s,
            max-height ${duration}s,
            height ${duration}s
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
