import { useEffect, useState } from "react";

import "./App.css";
import {
  defaultClothingItems,
  coordinates,
  apiKey,
} from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedWeatherBtn, setSelectedWeatherBtn] = useState("");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
        />
        <Footer />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
        selectedWeatherBtn={selectedWeatherBtn}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="modal__input"
          />
        </label>
        <label htmlFor="imageURL" className="modal__label">
          Image{" "}
          <input
            id="imageURL"
            type="url"
            placeholder="Image URL"
            className="modal__input"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label
            htmlFor="hot"
            className={`modal__label modal__label_type_radio${
              selectedWeatherBtn === "hot" ? " modal__label_active" : ""
            }`}
          >
            <input
              id="hot"
              name="weatherType"
              value="hot"
              type="radio"
              className={`modal__radio-input${
                selectedWeatherBtn === "hot" ? " modal__input_active" : ""
              }`}
              checked={selectedWeatherBtn === "hot"}
              onChange={(e) => setSelectedWeatherBtn(e.target.value)}
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className={`modal__label modal__label_type_radio${
              selectedWeatherBtn === "warm" ? " modal__label_active" : ""
            }`}
          >
            <input
              id="warm"
              name="weatherType"
              value="warm"
              type="radio"
              className={`modal__radio-input${
                selectedWeatherBtn === "warm" ? " modal__input_active" : ""
              }`}
              checked={selectedWeatherBtn === "warm"}
              onChange={(e) => setSelectedWeatherBtn(e.target.value)}
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className={`modal__label modal__label_type_radio${
              selectedWeatherBtn === "cold" ? " modal__label_active" : ""
            }`}
          >
            <input
              id="cold"
              name="weatherType"
              value="cold"
              type="radio"
              className={`modal__radio-input${
                selectedWeatherBtn === "cold" ? " modal__input_active" : ""
              }`}
              checked={selectedWeatherBtn === "cold"}
              onChange={(e) => setSelectedWeatherBtn(e.target.value)}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
