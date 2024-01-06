import "./../styles/header.css";

const Header = (props) => {
  const { title, subtitle } = props;

  return (
    <div className="title-container">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default Header;
