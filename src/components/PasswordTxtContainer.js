import { IoReload, IoClipboard } from "react-icons/io5";

import "./../styles/PasswordTxtContainer.css";

const PasswordTxtContainer = (props) => {
  const { password } = props;
  return (
    <div className="password-container">
      <input type="text" className="password-input" value={password} readOnly />
      <button className="btn-password-copy">
        <IoClipboard />
        &nbsp;Copy
      </button>
    </div>
  );
};

export default PasswordTxtContainer;
