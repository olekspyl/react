import { Overlay } from "./Modal.styled";

export const Modal = ({ onModalToggle, currentImage}) => {
  const {src, alt} = currentImage();
  return (
<Overlay className="overlay" onClick={onModalToggle}>
      <div className="modal">
        <img src={src} alt={alt} />
      </div>
  </Overlay>
  )
};


