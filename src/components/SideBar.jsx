export default function SideBar({onClickAddProject, onClickOpenProject, projects}){

  return(
    <aside className="bg-stone-900 w-1/5 h-screen rounded-tr-xl px-8 py-16 flex flex-col items-center space-x-4 gap-8 text-stone-50 md:w-72">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h1>
      <button className="px-4 py-2 text-xs text-stone-400 rounded-md bg-stone-700 hover:bg-stone-600 hover:text-stone-100 md:text-base" onClick={onClickAddProject}>
        + Add Project
      </button>
      {projects.map(project => {
        return (
          <button key={project.title} onClick={() => onClickOpenProject(project.title)}>{project.title}</button>
        )
      })}
    </aside>
  )
}
