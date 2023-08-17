import { Fragment } from "react";
import useFormContext from "../hooks/useFormContext";

const StepperBar = () => {
  const { page, title } = useFormContext();
  const interval = 100 / Object.keys(title).length;
  const progress = ((page + 1) * interval).toFixed(2);
  const steps = Object.keys(title).map((step, i) => {
    return (
      <div key={i} className="stepper">
        Step {i + 1}
      </div>
    );
  });
  return (
    <Fragment>
      <div className="stepper-container">{steps}</div>
      <progress className="progress" max="100" value={progress}></progress>
    </Fragment>
  );
};
export default StepperBar;
