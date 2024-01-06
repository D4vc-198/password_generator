import "./../styles/passwordConfig.css";

const PasswordConfig = () => {
  return (
    <div className="password-config-container">
      {/* PASSWORD Length */}
      <div className="password-length-container">
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
        <div className="input-checkbox-container">
          <label>Uppercase</label>
          <input type="checkbox" className="checkbox"/>
        </div>
        <div className="input-checkbox-container">
          <label>Lowercase</label>
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="input-checkbox-container">
          <label>Numbers</label>
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="input-checkbox-container">
          <label>Special Characters</label>
          <input type="checkbox" className="checkbox" />
        </div>
      </div>
      <div className="btn-generate-password-container">
        <button className="btn-generate-password">Generate</button>
      </div>
    </div>
  );
};

export default PasswordConfig;
