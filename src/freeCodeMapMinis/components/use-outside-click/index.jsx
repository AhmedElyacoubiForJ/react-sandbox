import { useEffect } from "react";
// This hook can be used to handle clicks outside of an element
// and can be used to implement features such as modal dialogs
// or menus that should be closed when the user clicks outside of them.
export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      // check if the clicked element is within the monitored element (ref.current)
      // or a child of the monitored element.
      // if the clicked element is not within the monitored element,
      // the handler will not be called.
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    // clean up
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
