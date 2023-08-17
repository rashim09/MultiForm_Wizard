import React from "react";
import useFormContext from "../hooks/useFormContext";

const Personal = () => {
  const { data, handleChange } = useFormContext();
  const content = (
    <div className="personal-info-container" url="/Personal">
      <div className="flex-col">
        <label htmlFor="personalfirstName">First Name</label>
        <input
          type="text"
          id="personalfirstName"
          name="personalfirstName"
          placeholder="Enter your FirstName"
          pattern="([A-Za-z])[\w+.]{1,}"
          value={data.personalfirstName}
          onChange={handleChange}
        />
      </div>
      <div className="flex-col">
        <label htmlFor="personallastName">Last Name</label>
        <input
          type="text"
          id="personallastName"
          name="personallastName"
          placeholder="Enter your LastName"
          pattern="([A-Za-z])[\w+.]{1,}"
          value={data.personallastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex-col">
        <label htmlFor="personaldob">Date of Birth</label>
        <input
          type="date"
          id="personaldob"
          name="personaldob"
          placeholder="mm/dd/yyyy"
          value={data.personaldob}
          onChange={handleChange}
          min="1988-05-20"
          max="2023-08-18"
        />
      </div>
    </div>
  );
  return content;
};

export default Personal;
