import { useRef, forwardRef, useImperativeHandle} from "react";

const AddingNewProject =  forwardRef(function AddingNewProject({onClickSave}, ref){
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dateInput = useRef();
  //const formRef = useRef();

//  useImperativeHandle(ref, () => {
//      return {
//          clear(){
//              formRef.current.reset()
//          }
//      }
//  })

  const labelClass = "text-stone-500 font-bold";
  const inputClass = "bg-stone-300 border-2 border-b-stone-500 mb-3";
  const buttonClass = "px-4 py-2 text-xs rounded-md hover:bg-stone-600";

  return (
    <>
      <div className="flex flex-row justify-end w-full">
        <button className={`text-neutral-900 bg-white ${buttonClass}`}>Cancel</button>
        <button className={`text-neutral-400  bg-stone-800 ${buttonClass}`}
          type="submit" onClick={() => onClickSave(titleInput.current.value,descriptionInput.current.value,dateInput.current.value)}
        >
          Save
        </button>
      </div>
      <form ref={ref} className="flex flex-col w-full">
        <label className={labelClass}>TITLE</label>
        <input type="text" className={inputClass} ref={titleInput}/>
        <label className={labelClass}>DESCRIPTION</label>
        <textarea type="text" className={inputClass} ref={descriptionInput}/>
        <label className={labelClass}>DUE DATE</label>
        <input type="date" className={inputClass} ref={dateInput}/>
      </form>
    </>
  )
});
  export default AddingNewProject;
