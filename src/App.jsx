// import CarrouselDisplay from "./components/CarrouselDisplay";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import ImageRotator from "./components/ImageRotation";
import ProductCards from "./components/ProductCards";
import Carrousel from "./components/CarrouselDisplay";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="display-container">
          <div className="product-showcase">
            <div className="product-image">
              <ImageRotator />
            </div>
            <div className="product-info">
              <h3 className="product-title">Xbox Elite Wireless Controller</h3>
              <p className="product-description">
                Compete at the next level with swapable components that unlock
                limitless potential.
              </p>
              <button>Info</button>
            </div>
          </div>

          <Carrousel />
        </div>
      </div>
    </>
  );
}

export default App;
