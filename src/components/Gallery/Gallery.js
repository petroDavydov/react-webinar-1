import PropTypes from "prop-types";
import { GalleryItem } from "../GalleryItem/GalleryItem";

export function Gallery({ description, images: arrayOfImages, children }) {
  //   console.log("title", title);
  //   console.log("description", description);
  //   console.log("images", arrayOfImages);
  // console.log(children);

  return (
    <section>
      {children}
      <p>{description}</p>
      <ul>
        {arrayOfImages.map(({ id, source }) => {
          //   console.log(imageObj);
          return <GalleryItem id={id} source={source} />;
        })}
      </ul>
    </section>
  );
}

Gallery.defaultProps = {
  description: "Default text for description",
};

Gallery.propTypes = {
  description: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      source: PropTypes.string,
    })
  ),
  children: PropTypes.arrayOf(PropTypes.element),
};
