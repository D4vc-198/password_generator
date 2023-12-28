import Header from "./components/header";
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
    </div>
  );
}

export default App;
