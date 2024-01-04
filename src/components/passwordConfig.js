import "./../styles/passwordConfig.css";

const PasswordConfig = () => {
  return (
    <div className="password-config-container">
      {/* PASSWORD Length */}
      <div>
        <p>Password Length: 0</p>
        <input
          className="password-select-length"
          type="range"
          min="0"
          max="100"
        />
      </div>
      {/* PASSWORD CHARACTERS CONTAINER */}
      <div className="checkbox-container">
        <div className="input-checkbox">
          <label>Uppercase</label>
          <input type="checkbox" />
        </div>
        <div className="input-checkbox">
          <label>Lowercase</label>
          <input type="checkbox" />
        </div>
        <div className="input-checkbox">
          <label>Numbers</label>
          <input type="checkbox" />
        </div>
        <div className="input-checkbox">
          <label>Special Characters</label>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default PasswordConfig;
