import { IoReload, IoClipboard } from "react-icons/io5";

import "./../styles/PasswordTxtContainer.css";
import { useState } from "react";

const PasswordTxtContainer = (props) => {
  const { password } = props;

  const copy = async () => {
    await navigator.clipboard.writeText(password)
  }

  return (
    <div className="password-container">
      <input type="text" className="password-input" value={password} readOnly />
      <button className="btn-password-copy" onClick={copy} disabled={!password}>
        <IoClipboard />
        &nbsp;Copy
      </button>
    </div>
  );
};

export default PasswordTxtContainer;
