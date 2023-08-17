import useFormContext from "../hooks/useFormContext";

const Billing = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col" url="/Billing">
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="billFirstName">First Name</label>
          <input
            type="text"
            id="billFirstName"
            name="billFirstName"
            placeholder="Enter FirstName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.billFirstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col">
          <label htmlFor="billLastName">Last Name</label>
          <input
            type="text"
            id="billLastName"
            name="billLastName"
            placeholder="Enter LastName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.billLastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="billAddress1">Address</label>
      <input
        type="text"
        id="billAddress1"
        name="billAddress1"
        placeholder="Enter Street Address"
        pattern="[\w\d\s.#]{2,}"
        value={data.billAddress1}
        onChange={handleChange}
      />

      <label htmlFor="billAddress2" className="offscreen">
        2nd Address line
      </label>
      <input
        type="text"
        id="billAddress2"
        name="billAddress2"
        placeholder="Apartment Number"
        pattern="[\w\d\s.#]{2,}"
        value={data.billAddress2}
        onChange={handleChange}
      />

      <label htmlFor="billCity">City</label>
      <input
        type="text"
        id="billCity"
        name="billCity"
        placeholder="Enter city Name"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.billCity}
        onChange={handleChange}
      />

      <label htmlFor="billState">State</label>
      <input
        list="billStateList"
        placeholder="Start typing..."
        id="billState"
        name="billState"
        value={data.billState}
        onChange={handleChange}
      />
      <datalist id="billStateList" value={""} onChange={handleChange}>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="District Of Columbia">District Of Columbia</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="IIllinoisL">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="WyomingY">Wyoming</option>
      </datalist>

      <label htmlFor="billZipCode">Zip Code</label>
      <input
        type="text"
        id="billZipCode"
        name="billZipCode"
        placeholder="12345"
        pattern="[0-9]{5}"
        maxLength="5"
        value={data.billZipCode}
        onChange={handleChange}
      />
    </div>
  );

  return content;
};
export default Billing;
