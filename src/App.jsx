
import Counter from "./components/Counter";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal"
import ColorFlipper from "./components/colorFlipper";

function App() {
  return (
    <div>
      <Navbar />
     
      <ColorFlipper/>
        <Counter />
        <Carousel />
       <Modal />
    </div>
  );
}

export default App;
