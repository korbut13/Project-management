import { forwardRef, useImperativeHandle} from "react";

const Input = forwardRef(function Input({label, textarea, ...props}, ref){
  const inputClass = "bg-stone-300 border-2 border-b-stone-500 mb-3 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col">
      <label className="text-stone-500 font-bold">{label}</label>
      {textarea ? <textarea className={inputClass} ref={ref}/> : <input className={inputClass} {...props} ref={ref}/>}
    </p>
  )
});

export default Input;
