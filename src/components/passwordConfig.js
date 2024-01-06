import { useEffect, useState } from "react";
import "./../styles/passwordConfig.css";

const PasswordConfig = () => {
  const [passLength, setPassLength] = useState(8);
  const [checkboxOptions, setCheckboxOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialChar: false,
  });

  const handleCheckboxOption = (option) => {
    setCheckboxOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  useEffect(() => {
    console.log(checkboxOptions);
  }, [checkboxOptions]);

  return (
    <div className="password-config-container">
      {/* PASSWORD Length */}
      <div className="password-length-container">
        <p>Password Length: {passLength}</p>
        <input
          className="password-select-length"
          type="range"
          min="0"
          max="100"
          value={passLength}
          onChange={(e) => setPassLength(e.target.value)}
        />
      </div>
      {/* PASSWORD CHARACTERS CONTAINER */}
      <div className="checkbox-container">
        <div className="input-checkbox-container">
          <label>Uppercase</label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxOptions.uppercase}
            onChange={() => handleCheckboxOption("uppercase")}
          />
        </div>
        <div className="input-checkbox-container">
          <label>Lowercase</label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxOptions.lowercase}
            onChange={() => handleCheckboxOption("lowercase")}
          />
        </div>
        <div className="input-checkbox-container">
          <label>Numbers</label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxOptions.numbers}
            onChange={() => handleCheckboxOption("numbers")}
          />
        </div>
        <div className="input-checkbox-container">
          <label>Special Characters</label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxOptions.specialChar}
            onChange={() => handleCheckboxOption("specialChar")}
          />
        </div>
      </div>
      <div className="btn-generate-password-container">
        <button className="btn-generate-password">Generate</button>
      </div>
    </div>
  );
};

export default PasswordConfig;
