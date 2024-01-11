import NoProjects from "../assets/no-projects.png";

export default function EmptyContent(){
  return(
    <div className="flex flex-col gap-8 items-center mt-16 w-7/12">
      <img src={NoProjects} alt="No projects" className="h-16 w-16"/>
      <h2>No project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button className="px-4 py-2 text-xs text-neutral-400 rounded-md bg-stone-800 hover:bg-stone-600">
        Create new project
      </button>
    </div>
  )
}
