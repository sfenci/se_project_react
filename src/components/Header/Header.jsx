import "./Header.css";
import logo from "../../images/wtwr-logo.svg";
import avatarPlaceholder from "../../images/avatar-placeholder.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR Logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">USERNAME</p>
        <img
          src={avatarPlaceholder}
          alt="Your Avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
