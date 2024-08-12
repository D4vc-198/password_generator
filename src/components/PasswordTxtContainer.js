import { useState } from "react";
import { IoReload, IoClipboard, IoShieldCheckmark } from "react-icons/io5";
import "./../styles/PasswordTxtContainer.css";

const PasswordTxtContainer = (props) => {
  const { password } = props;
  const [icon, setIcon] = useState(<IoClipboard />);

  const copy = async () => {
    await navigator.clipboard.writeText(password);
    setIcon(<IoShieldCheckmark />);
    setTimeout(() => {
      setIcon(<IoClipboard />);
    }, 1000);
  };

  return (
    <div className="password-container">
      <input type="text" className="password-input" value={password} readOnly />
      <button className="btn-password-copy" onClick={copy} disabled={!password}>
        {icon}
        &nbsp;Copy
      </button>
    </div>
  );
};

export default PasswordTxtContainer;