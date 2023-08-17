import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const title = {
    0: "Personal",
    1: "Contact",
    2: "Billing",
    3: "Preview",
  };

  const [page, setPage] = useState(0);
  const [url, setUrl] = useState("/");

  // OnChange of browser back and forward button and respective url change rendering of component
  useEffect(() => {
    setUrl(location.pathname);
    let path = location.pathname.split("/")[1]
      ? location.pathname.split("/")[1]
      : "/Personal";
    let pageNumber = Object.keys(title).find((key) => title[key] === path) || 0;
    if (pageNumber !== undefined) {
      setPage(parseInt(pageNumber));
    }
  }, [location.pathname]);

  const [data, setData] = useState({
    billFirstName: "",
    billLastName: "",
    billAddress1: "",
    billAddress2: "",
    billCity: "",
    billState: "",
    billZipCode: "",
    personalfirstName: "",
    personallastName: "",
    personaldob: "",
    contactphoneNum: "",
    contactemailAdd: "",
  });

  // Event Handler Functions for Input Change, prev/next buttons and submit.
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePrev = () => {
    setPage((prev) => prev - 1);
    window.history.go(-1);
    if (page === 0) {
      window.history.go(1);
      setUrl("/Personal");
      navigate("/Personal");
    }
    if (page === 1) {
      navigate("/Personal", { state: { from: "Contact" } });
      setUrl("/Personal");
    } else if (page === 2) {
      navigate("/Contact", { state: { from: "Billing" } });
      setUrl("/Contact");
    } else if (page === 3) {
      navigate("/Billing", { state: { from: "Preview" } });
      setUrl("/Billing");
    }
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
    window.history.go(1);
    if (page === 0) {
      navigate("/Contact", { state: { from: "Personal" } });
      setUrl("/Contact");
    } else if (page === 1) {
      navigate("/Billing", { state: { from: "Contact" } });
      setUrl("/Billing");
    } else if (page === 2) {
      navigate("/Preview", { state: { from: "Billing" } });
      setUrl("/Preview");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("FORM SUBMITTED");
    console.log(data, "Form submitted data");
  };

  //Logic Implementaion Functions for Buttons Prev/Next/Submit
  const canSubmit =
    [...Object.values(data)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("personal") && key !== "billAddress2")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("contact"))
    .map((key) => data[key])
    .every(Boolean);

  //Utility Variables to  hide/disable/show buttons on each steps of form
  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage2);

  const prevHide = page === 0 && "remove-button";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        url,
        setUrl,
        handlePrev,
        handleNext,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
