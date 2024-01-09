import { useEffect, useState } from "react";
import "./../styles/passwordConfig.css";

const PasswordConfig = () => {
  const [passLength, setPassLength] = useState(8);
  const [passwordGen, setPasswordGen] = useState("");
  const [checkboxOptions, setCheckboxOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialChar: false,
  });

  const strUpperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const strLowerCase = "abcdefghijklmnñopqrstuvwxyz";
  const strNumbers = "0123456789";
  const strSpecial = "!”#$%&‘()*+,-./:;=?@[]^_`{|}~";

  const handleCheckboxOption = (option, value) => {
    setCheckboxOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));

    switch (option) {
      case "uppercase":
        if (value) {
          setPasswordGen(passwordGen + strUpperCase);
        } else {
          setPasswordGen(passwordGen.replace(strUpperCase, ""));
        }
        break;
      case "lowercase":
        if (value) {
          setPasswordGen(passwordGen + strLowerCase);
        } else {
          setPasswordGen(passwordGen.replace(strLowerCase, ""));
        }
        break;
      case "numbers":
        if (value) {
          setPasswordGen(passwordGen + strNumbers);
        } else {
          setPasswordGen(passwordGen.replace(strNumbers, ""));
        }
        break;
      case "specialChar":
        if (value) {
          setPasswordGen(passwordGen + strSpecial);
        } else {
          setPasswordGen(passwordGen.replace(strSpecial, ""));
        }
        break;
      default:
        return;
    }
    // console.log(`__OPCION: ${option} : ${value}`);
  };

  useEffect(() => {
    // if (checkboxOptions.uppercase === true) {
    //   setPasswordGen(passwordGen + strUpperCase);
    // } else {
    //   setPasswordGen(passwordGen.replace(strUpperCase, ""));
    // }
    // if (checkboxOptions.lowercase === true) {
    //   setPasswordGen(passwordGen + strLowerCase);
    // } else {
    //   setPasswordGen(passwordGen.replace(strLowerCase, ""));
    // }
    // if (checkboxOptions.numbers === true) {
    //   setPasswordGen(passwordGen + strNumbers);
    // } else {
    //   setPasswordGen(passwordGen.replace(strNumbers, ""));
    // }
    // if (checkboxOptions.specialChar === true) {
    //   setPasswordGen(passwordGen + strSpecial);
    // } else {
    //   setPasswordGen(passwordGen.replace(strSpecial, ""));
    // }
  }, [checkboxOptions]);

  useEffect(() => {
    console.log("passwordGen", passwordGen);
  }, [passwordGen]);

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
            onChange={(e) =>
              handleCheckboxOption("uppercase", e.target.checked)
            }
          />
        </div>
        <div className="input-checkbox-container">
          <label>Lowercase</label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxOptions.lowercase}
            onChange={(e) =>
              handleCheckboxOption("lowercase", e.target.checked)
            }
          />
        </div>
        <div className="input-checkbox-container">
          <label>Numbers</label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxOptions.numbers}
            onChange={(e) => handleCheckboxOption("numbers", e.target.checked)}
          />
        </div>
        <div className="input-checkbox-container">
          <label>Special Characters</label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxOptions.specialChar}
            onChange={(e) =>
              handleCheckboxOption("specialChar", e.target.checked)
            }
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
