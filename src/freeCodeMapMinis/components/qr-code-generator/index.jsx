import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenarator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your value here..."
        />

        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Genarate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
