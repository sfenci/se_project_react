import "./ItemModal.css";
import closeIconLight from "../../images/close-btn-white.png";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content--preview">
        <button onClick={onClose} type="button" className="modal__close-btn">
          <img
            src={closeIconLight}
            alt="Close"
            className="modal__close-btn-image"
          />
        </button>
        <img src={card.link} alt="Clothing Item" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
