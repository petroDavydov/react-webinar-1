export const GalleryItem = ({ source, id }) => (
  <li key={id}>
    <img src={source} alt={id} width="500" height="300" />
  </li>
);
