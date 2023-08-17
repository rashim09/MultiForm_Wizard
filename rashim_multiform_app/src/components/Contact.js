import React from "react";
import useFormContext from "../hooks/useFormContext";

const Contact = () => {
  const { data, handleChange } = useFormContext();
  const content = (
    <div className="flex-col" to="/Contact">
      <div className="flex-col">
        <label htmlFor="contactphoneNum">Phone Number</label>
        <input
          type="text"
          id="contactphoneNum"
          name="contactphoneNum"
          placeholder="+1 999-999-9999"
          value={data.contactphoneNum}
          pattern="[+][1] [0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={handleChange}
        />
      </div>
      <div className="flex-col">
        <label htmlFor="contactemailAdd">Email Address</label>
        <input
          type="email"
          id="contactemailAdd"
          name="contactemailAdd"
          placeholder="test@gmail.com"
          value={data.contactemailAdd}
          onChange={handleChange}
        />
      </div>
    </div>
  );
  return content;
};

export default Contact;
