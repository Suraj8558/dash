import { Modal } from "@suraj8558/react-custom-modal";
import { useState } from "react";

export default function CustomModal() {
const [isOpen, setIsOpen] = useState(false);


   return (
     <div>
       <button onClick={() => setIsOpen(true)}>Open Modal</button>

       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
         <h2>Hello World!</h2>
         <p>This is a simple modal.</p>
         <button onClick={() => setIsOpen(false)}>Close</button>
       </Modal>
     </div>
   );
}
