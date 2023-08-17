import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import { useEffect } from "react";
import StepperBar from "./StepperBar";
const Form = () => {
  const {
    page,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
    handleNext,
    handlePrev,
    handleSubmit
  } = useFormContext();

  useEffect(() => {}, []);

  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <StepperBar />
      <header className="form-header">
        {title ? <h2>{title[page]}</h2> : ""}
        <div className="button-container">
          <button
            type="button"
            className={`button ${prevHide}`}
            onClick={handlePrev}
            disabled={disablePrev}
          >
            Prev
          </button>
          <button
            type="button"
            className={`button ${nextHide}`}
            onClick={handleNext}
            disabled={disableNext}
          >
            Next
          </button>
          <button
            type="submit"
            className={`button ${submitHide}`}
            disabled={!canSubmit}
          >
            Submit
          </button>
        </div>
      </header>

      <FormInputs />
    </form>
  );

  return content;
};
export default Form;
