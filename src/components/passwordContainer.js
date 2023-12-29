import { IoReload, IoClipboard } from "react-icons/io5"

import "./../styles/passwordContainer.css";

const PasswordContainer = () => {
  return (
    <div className="password-container">
      <label className="password-text-container">
        <input type="text" className="password-input" readOnly/>
        <button className="btn-reset-password"><IoReload /></button>
      </label>
      <button className="btn-password-copy"><IoClipboard />&nbsp;Copy</button>
    </div>
  );
};

export default PasswordContainer;
