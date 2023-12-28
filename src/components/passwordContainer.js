import "./../styles/passwordContainer.css";

const PasswordContainer = () => {
  return (
    <div className="password-container">
      <input type="text" className="password-input" />
      <button className="btn-password-copy">Copy</button>
    </div>
  );
};

export default PasswordContainer;
