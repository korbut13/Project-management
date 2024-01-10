import Form from "./Form"
export default function AddingNewProject(){
  return (
    <>
      <div className="flex flex-row justify-end w-full">
        <button className="px-4 py-2 text-xs text-neutral-900 rounded-md bg-white hover:bg-stone-600">
          Cancel
        </button>
        <button className="px-4 py-2 text-xs text-neutral-400 rounded-md bg-stone-800 hover:bg-stone-600">
          Save
        </button>
      </div>
      <Form/>
    </>
  )
}
