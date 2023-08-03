import { ImageGalleryItem } from "components/imageGalleryItem";
import { ImageGalleryEl } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onModalToggle }) => {
  return (
    <ImageGalleryEl>
      {images.map(image =>
        <ImageGalleryItem
          key={image.id}
          onModalToggle={() => onModalToggle(image.largeImageURL, image.tags)}
          image={image}
        ></ImageGalleryItem>)
      }
</ImageGalleryEl>
  )
};
