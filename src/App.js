import Header from "./components/header";
import PasswordConfig from "./components/passwordConfig";
import PasswordContainer from "./components/passwordContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Header
        title="PASSWORD GENERATOR"
        subtitle="Create strong and secure passwords to keep your account safe online."
      />
      <PasswordContainer />
      <PasswordConfig />
    </div>
  );
}

export default App;
