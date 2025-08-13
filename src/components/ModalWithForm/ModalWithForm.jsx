import "./ModalWithForm.css";
import closeIconDark from "../../images/close-btn-grey.png";

function ModalWithForm({ children, buttonText, title, isOpen, onClose, name }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content--form">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close-btn">
          <img
            src={closeIconDark}
            alt="Close"
            className="modal__close-btn-image"
          />
        </button>
        <form action="" className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
