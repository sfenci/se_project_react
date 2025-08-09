import "./WeatherCard.css";
import cloudy from "../../images/cloudy-image.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={cloudy} alt="" className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
