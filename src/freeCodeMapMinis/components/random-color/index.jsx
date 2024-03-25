import { useState } from "react";

export default function RandomColor() {
  // hex type as default
  const [typeOfColor, setTypeOfColor] = useState("hex");
  // black color as default
  const [color, setColor] = useState("#000000");

  const handleCreateRandomColor = () => {
    if (typeOfColor === "hex") {
      // const randomColor = Math.floor(Math.random() * 16777215).toString(16)
      // setColor(`#${randomColor}`);
      setColor(generateRandomHexColor());
    } else {
      const weighting = 256;

      setColor(
        `rgb(
          ${generateNumber(weighting)},
          ${generateNumber(weighting)},
          ${generateNumber(weighting)}
          )`
      );
    }
  };

  function generateNumber(weighting) {
    return Math.floor(Math.random() * weighting);
  }

  function generateRandomHexColor() {
    // #123456
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomHexColor = "#";

    for (let i = 0; i < 6; i++) {
      randomHexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return randomHexColor;
  }
  console.log(generateNumber(256));
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      <p
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "WHITE",
          padding: "25px",
        }}
      >
        {typeOfColor}
      </p>
    </div>
  );
}
