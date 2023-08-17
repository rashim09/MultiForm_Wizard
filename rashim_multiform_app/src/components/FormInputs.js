import Billing from "./Billing";
import Contact from "./Contact";
import Personal from "./Personal";
import Preview from "./Preview";
import useFormContext from "../hooks/useFormContext";
import { useEffect } from "react";

const FormInputs = () => {
  const { page, url } = useFormContext();

  const display = {
    0: <Personal />,
    1: <Contact />,
    2: <Billing />,
    3: <Preview />,
  };

  useEffect(() => {}, [page, url]);
  const content = (
    <div className="form-inputs flex-col">
      {page === 0 && (url === "/Personal" || url === "/")
        ? display[0]
        : page === 1 && url === "/Contact"
        ? display[1]
        : page === 2 && url === "/Billing"
        ? display[2]
        : page === 3 && url === "/Preview"
        ? display[3]
        : display[0]}
    </div>
  );

  return content;
};
export default FormInputs;
