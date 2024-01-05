import PasswordTxtContainer from "./components/PasswordTxtContainer";
import Header from "./components/header";
import PasswordConfig from "./components/passwordConfig";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Header
        title="PASSWORD GENERATOR"
        subtitle="Create strong and secure passwords to keep your account safe online."
      />
      <PasswordTxtContainer />
      <PasswordConfig />
    </div>
  );
}

export default App;
