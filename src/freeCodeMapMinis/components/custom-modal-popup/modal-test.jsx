import { useState } from "react"

import Modal from "./modal"
export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup() {
        setShowModalPopup((s) => !s)
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup} >Open Modal Popup</button>
            {
                showModalPopup &&
                <Modal />
            }
        </div>
    )
}