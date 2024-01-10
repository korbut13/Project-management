export default function SideBar({onClickAddProject}){
  return(
    <div className="bg-black w-1/5 h-screen mt-8 rounded-tr-xl pt-8 flex flex-col items-center space-x-4 gap-8">
      <h1 className="text-white uppercase ">Your projects</h1>
      <button className="px-4 py-2 text-xs text-neutral-400 rounded-md bg-stone-600 hover:bg-stone-700" onClick={onClickAddProject}>
        + Add Project
      </button>
    </div>
  )
}
