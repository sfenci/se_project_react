import "./WeatherCard.css";
import sunny from "../../images/sunny-image.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F</p>
      <img src={sunny} alt={weatherData.type} className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
