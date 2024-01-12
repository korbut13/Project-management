import { useRef, forwardRef, useImperativeHandle} from "react";

import Input from "./Input";

export default function AddNewProject({onClickSave, onClickClose}){
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dateInput = useRef();

  const buttonClass = "px-4 py-2 text-xs rounded-md hover:bg-stone-600";

  return (
    <div className="flex flex-col gap-8 items-center mt-16 w-7/12">
      <menu className="flex flex-row justify-end w-full">
        <li><button className={`text-neutral-900 bg-white ${buttonClass}`} onClick={onClickClose}>Cancel</button></li>
        <li><button className={`text-neutral-400  bg-stone-800 ${buttonClass}`}
            type="submit" onClick={() => onClickSave(titleInput.current.value,descriptionInput.current.value,dateInput.current.value)}
          >
            Save
          </button>
        </li>
      </menu>
      <form  className="flex flex-col w-full">
        <Input label="Title" type="text" ref={titleInput}/>
        <Input label="Description" textarea ref={descriptionInput}/>
        <Input label="Due Date" type="date" ref={dateInput}/>
      </form>
    </div>
  )
}
