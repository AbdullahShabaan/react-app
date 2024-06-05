import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
function Modal({ children }) {
  // const ref = useRef(null);
  // if (!ref.current) {
  //   ref.current = document.createElement("div");
  // }
  // useEffect(() => {
  //   const modal = document.getElementById("modal");
  //   modal.appendChild(ref.current);
  //   return () => modal.removeChild(ref.current);
  // }, []);
  // return createPortal(children, ref.current);

  const ref = useRef(null);
  if (!ref.current) {
    ref.current = document.createElement("div");
  }
  useEffect(() => {
    const modal = document.getElementById("modal");
    modal.appendChild(ref.current);
    return () => modal.removeChild(ref.current);
  }, []);

  return createPortal(children, ref.current);
}

export default Modal;
