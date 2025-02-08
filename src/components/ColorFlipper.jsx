import { useState } from "react";
import '../css/ColorFlipper.css'

function ColorFlipper() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={changeColor} style={{ padding: "10px 20px", fontSize: "16px" }}>Change Color</button>
    </div>
  );
}

export default ColorFlipper;
