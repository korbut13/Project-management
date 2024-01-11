export default function SideBar({onClickAddProject, projects, onSelectProject}){

  function handleOpenProject(title){
    const selectedProject = projects.find(project => project.title === title);
    onSelectProject(selectedProject);
  }

  return(
    <div className="bg-stone-900 w-1/5 h-screen mt-8 rounded-tr-xl pt-8 flex flex-col items-center space-x-4 gap-8 text-white">
      <h1 className="text-white uppercase ">Your projects</h1>
      <button className="px-4 py-2 text-xs text-neutral-400 rounded-md bg-stone-600 hover:bg-stone-700" onClick={onClickAddProject}>
        + Add Project
      </button>
      {projects.map(project => {
        return (
          <button key={project.title} onClick={() => handleOpenProject(project.title)}>{project.title}</button>
        )
      })}
    </div>
  )
}
