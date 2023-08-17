import React, { Fragment } from "react";
import useFormContext from "../hooks/useFormContext";

const Preview = () => {
  const { data, canSubmit } = useFormContext();
  const {
    billFirstName,
    billLastName,
    billAddress1,
    billAddress2,
    billCity,
    billState,
    billZipCode,
    personalfirstName,
    personallastName,
    personaldob,
    contactphoneNum,
    contactemailAdd,
  } = data;

  return (
    <Fragment>
      <div className="preview-container">
        {!canSubmit ? (
          <span style={{ color: "red" }}>
            Please check and fill all fields values
          </span>
        ) : (
          ""
        )}
        <dl>
          <h4 style={{ margin: "10px 0px", color: "gray" }}>Personal Info</h4>
          <div className="grid-dt">
            <dt>First Name:- </dt>
            <dd>{personalfirstName}</dd>
          </div>
          <div className="grid-dt">
            <dt>Last Name:- </dt>
            <dd>{personallastName}</dd>
          </div>
          <div className="grid-dt">
            <dt>Date of birth:- </dt>
            <dd>{personaldob}</dd>
          </div>
          <h4 style={{ margin: "10px 0px", color: "gray" }}>Contact Info</h4>
          <div className="grid-dt">
            <dt>Phone Number:- </dt>
            <dd>{contactphoneNum}</dd>
          </div>
          <div className="grid-dt">
            <dt>E-mail:- </dt>
            <dd>{contactemailAdd}</dd>
          </div>
          <h4 style={{ margin: "10px 0px", color: "gray" }}>Billing Address</h4>
          <div className="grid-dt">
            <dt>First Name:- </dt>
            <dd>{billFirstName}</dd>
          </div>
          <div className="grid-dt">
            <dt>Last Name:- </dt>
            <dd>{billLastName}</dd>
          </div>
          <div className="grid-dt">
            <dt>Street Address :- </dt>
            <dd>
              {billAddress1} {billAddress2}
            </dd>
          </div>
          <div className="grid-dt">
            <dt>City:- </dt>
            <dd>{billCity}</dd>
          </div>
          <div className="grid-dt">
            <dt>State:- </dt>
            <dd>{billState}</dd>
          </div>
          <div className="grid-dt">
            <dt>ZipCode:- </dt>
            <dd>{billZipCode}</dd>
          </div>
        </dl>
      </div>
    </Fragment>
  );
};

export default Preview;
