import { useState } from "react";

import { ImageArray } from "../assets/ControllerImages";

export default function ImageRotator() {
  const [value, setValue] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //   const [isPointerDown, setIsPointerDown] = useState(false);

  const handleRotation = ({ x, y }) => {
    setMousePosition({ x, y });
    console.log(mousePosition);
  };

  const image = ImageArray.filter((url) => url.id === value);

  return (
    <>
      <div
        className="rotator"
        onPointerDown={(e) => {
          handleRotation({ x: e.clientX, y: e.clientY });
        }}
        style={{
          position: "relative",

          // backgroundImage: `url(${image[0].image})`,
        }}
      >
        <img
          style={{
            position: "absolute",
            transform: "translate(-25px, 0px",
            width: "125%",
          }}
          src={image[0].image}
        />

        <input
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0",
          }}
          type="range"
          min={1}
          max={30}
          step="1"
          onChange={(e) => {
            console.log(e.target.value);

            setValue(e.target.valueAsNumber);
          }}
        />
      </div>
    </>
  );
}
