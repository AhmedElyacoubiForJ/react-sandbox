import { useState } from "react";
import "./modal.css";

import Modal from "./modal";
export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup((s) => !s);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id="custom-id"
          header={<h1>Customized Header</h1>}
          body={<div>Customized body</div>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
