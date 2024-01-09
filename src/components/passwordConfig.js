import { useState } from "react";
import "./../styles/passwordConfig.css";

const PasswordConfig = (props) => {
  const { setPassword } = props;

  const [passLength, setPassLength] = useState(8);
  const [passwordOptions, setPasswordOptions] = useState("");
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

  // ELIMINA O AGREGA LOS VALORES A passwordOptions
  const updateOptions = (condition, str) => {
    if (condition) {
      setPasswordOptions(passwordOptions + str);
    } else {
      setPasswordOptions(passwordOptions.replace(str, ""));
    }
  };

  const handleCheckboxOption = (option, value) => {
    setCheckboxOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));

    switch (option) {
      case "uppercase":
        updateOptions(value, strUpperCase);
        break;
      case "lowercase":
        updateOptions(value, strLowerCase);
        break;
      case "numbers":
        updateOptions(value, strNumbers);
        break;
      case "specialChar":
        updateOptions(value, strSpecial);
        break;
      default:
        return;
    }
  };

  const generatePassword = () => {
    let passGen = "";
    for (let i = 0; i < passLength; i++) {
      passGen += passwordOptions.charAt(
        Math.floor(Math.random() * passwordOptions.length)
      );
    }

    setPassword(passGen);
  };

  //ACTIVA EL BOTON DE "GENERATE" SI ALGUNA OPCION DE LOS CHECKBOX ESTA ACTIVO
  const validateOptions = Object.values(checkboxOptions).some(
    (value) => value === true
  );

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
        <button
          className="btn-generate-password"
          onClick={generatePassword}
          disabled={!validateOptions}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default PasswordConfig;
