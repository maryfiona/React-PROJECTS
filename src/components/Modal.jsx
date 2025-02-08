import { useState } from "react";
import '../css/Modal.css'

function Modal() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {show && (
        <div className="modal">
          <div className="modal-content">
          <h2>Welcome to My Modal</h2>
            <p>This is a simple modal popup that contains some text. You can add any message, description, or even a form inside this modal.</p>
            
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
