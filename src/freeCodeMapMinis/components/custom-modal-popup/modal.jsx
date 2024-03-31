import "./modal.css";

export default function Modal({ id, header, body, footer }) {
  return (
    <div id={id || "Modal"} className="madal">
      <div className="model-content">
        <div className="header">
          <span className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Model Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <h2>Footer</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
