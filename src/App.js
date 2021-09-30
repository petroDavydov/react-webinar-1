import "./App.css";
import { Gallery } from "./components/Gallery/Gallery";
import Title from "./components/Title/Title";
const galleryImages = {
  title: "Images",
  description: "Best images",
  images: [
    {
      id: "1",
      source:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    { id: "2", source: "https://tinypng.com/images/social/website.jpg" },
  ],
};

const { title, images } = galleryImages;

function App() {
  return (
    <div className="App">
      FE-35 React
      <Gallery images={images}>
        {/* IF */}
        {title === "images" && <Title value={title} />}
        {/* IF */}

        {/* if ... else = TERNARY */}

        {title === "Images" ? <h2>Done</h2> : <h2>Not Made</h2>}

        {/* if ... else = TERNARY */}
        <p>Just text</p>
      </Gallery>
    </div>
  );
}

export default App;
