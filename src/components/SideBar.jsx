import Button from "./Button";

export default function SideBar({onClickAddProject, projects, onClickOpenProject, selectedProject}){

  return(
    <aside className="bg-stone-900 w-1/5 h-screen rounded-tr-xl px-8 py-16 flex flex-col items-center space-x-4 gap-8 text-stone-50 md:w-72">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h1>
      <Button onClick={onClickAddProject}>+ Add Project</Button>
      {projects.map(project => {
        let buttonStyle =  "w-full hover:bg-stone-700 rounded";
        if(selectedProject && selectedProject.title === project.title) buttonStyle += " bg-stone-800"

        return (
          <button key={project.title} onClick={() => onClickOpenProject(project.title)} className={buttonStyle}>{project.title}</button>
        )
      })}
    </aside>
  )
}
