export default function Form(){
  const labelClass = "text-stone-500 font-bold";
  const inputClass = "bg-stone-300 border-2 border-b-stone-500 mb-3";
  return(
    <form className="flex flex-col w-full">
        <label className={labelClass}>TITLE</label>
        <input type="text" className={inputClass}/>
        <label className={labelClass}>DESCRIPTION</label>
        <textarea type="text" className={inputClass}/>
        <label className={labelClass}>DUE DATE</label>
        <input type="date" className={inputClass}/>
    </form>
  )
}