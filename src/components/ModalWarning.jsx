import {createPortal} from "react-dom";

export default function ModalWarning({isOpen}){
  return createPortal(
    <dialog open={isOpen} className="p-6 w-2xl mx-auto my-36 bg-white rounded-xl shadow-lg flex items-center space-x-4 backdrop-blur-sm bg-white/30">
      <div className="text-xl font-medium text-black">Warning!</div>
      <p className="text-slate-500">You should input correct title and date!</p>
    </dialog>,
    document.getElementById('modal-root')
  )
}
