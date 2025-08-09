import "./ModalWithForm.css";
import closeBtn from "../../images/close-btn.png";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        {" "}
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close-btn">
          Close
          {/* <img className="modal__close-btn-image" src={closeBtn} alt="Close" /> */}
        </button>
        <form action="" className="modal__form">
          <label htmlFor="name" className="modal__label">
            {" "}
            Name
            <input
              id="name"
              type="text"
              placeholder="name"
              className="modal__input"
            />
          </label>
          <label htmlFor="imageURL" className="modal__label">
            {" "}
            Image
            <input
              id="imageURl"
              type="link"
              placeholder="Image URL"
              className="modal__input"
            />
          </label>
          <fieldset className="modal__radio-btns">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input id="hot" type="radio" className="modal__radio-input" />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input id="warm" type="radio" className="modal__radio-input" />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input id="cold" type="radio" className="modal__radio-input" />
              Cold
            </label>
          </fieldset>
          <button type="submit" className="modal__submit-btn">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
