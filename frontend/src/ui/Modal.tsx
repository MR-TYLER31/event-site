import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
