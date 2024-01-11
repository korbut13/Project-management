import { useRef, forwardRef, useImperativeHandle} from "react";

export default function AddingNewProject({onClickSave}){
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dateInput = useRef();


  const labelClass = "text-stone-500 font-bold";
  const inputClass = "bg-stone-300 border-2 border-b-stone-500 mb-3";
  const buttonClass = "px-4 py-2 text-xs rounded-md hover:bg-stone-600";

  return (
    <div className="flex flex-col gap-8 items-center mt-16 w-7/12">
      <div className="flex flex-row justify-end w-full">
        <button className={`text-neutral-900 bg-white ${buttonClass}`}>Cancel</button>
        <button className={`text-neutral-400  bg-stone-800 ${buttonClass}`}
          type="submit" onClick={() => onClickSave(titleInput.current.value,descriptionInput.current.value,dateInput.current.value)}
        >
          Save
        </button>
      </div>
      <form  className="flex flex-col w-full">
        <label className={labelClass}>TITLE</label>
        <input type="text" className={inputClass} ref={titleInput}/>
        <label className={labelClass}>DESCRIPTION</label>
        <textarea type="text" className={inputClass} ref={descriptionInput}/>
        <label className={labelClass}>DUE DATE</label>
        <input type="date" className={inputClass} ref={dateInput}/>
      </form>
    </div>
  )
}
