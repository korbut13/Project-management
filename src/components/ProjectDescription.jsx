import Tasks from "./Tasks"

export default function ProjectDesctiption({selectedProject, updateProjects}){
  return (
    <>
      <div className="flex justify-between w-full">
        <h2 className="text-stone-600 text-2xl font-bold">{selectedProject.title}</h2>
        <button className="text-xs">Delete</button>
      </div>
      <p className="text-stone-400 text-sm font-bold">{selectedProject.date}</p>
      <p className="border-b-2 border-b-stone-300 pb-4">{selectedProject.description}</p>
      <Tasks selectedProject={selectedProject} updateProjects={updateProjects}/>
    </>
  )
}
