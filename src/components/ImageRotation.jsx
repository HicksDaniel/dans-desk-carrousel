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
        onPointerDown={(e) => {
          handleRotation({ x: e.clientX, y: e.clientY });
        }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img style={{ width: "90%" }} src={image[0].image} />
        <input
          style={{ width: "50%" }}
          type="range"
          min={1}
          max={30}
          step="1"
          onChange={(e) => setValue(e.target.valueAsNumber)}
        />
      </div>
    </>
  );
}
