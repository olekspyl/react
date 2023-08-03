export const ImageGalleryItem = ({image, onModalToggle}) => {
  return (
    <li>
        <img src={image.webformatURL} alt={image.tags} onClick={onModalToggle}/>
    </li> 
  )
};
