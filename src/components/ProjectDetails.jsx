import { forwardRef } from "react";

const ProjectDetails = forwardRef(function ProjectDetails({project, deleteProject, addTask, removeTask}, ref){
  const tasks = project.tasks;

  return (
    <div className="flex flex-col gap-2 mt-16 w-7/12">
      <div className="flex justify-between w-full">
        <h2 className="text-stone-600 text-2xl font-bold">{project.title}</h2>
        <button className="text-xs" onClick={deleteProject}>Delete</button>
      </div>
      <p className="text-stone-400 text-sm font-bold">{project.date}</p>
      <p className="border-b-2 border-b-stone-300 pb-4">{project.description}</p>
      <h2>Tasks</h2>
      <div className="flex gap-2">
        <input className=" bg-stone-300 rounded-sm" ref={ref} type="text"></input>
        <button onClick={() => updateProjects(project)}>Add task</button>
      </div>
      {!tasks.length && (<p>This project does not have any tasks yet.</p>)}
      {tasks.length > 0 && (
      <ul className=" bg-stone-200 rounded-lg p-6">
        {tasks.map(task => {
          return (
            <li key={task} className="flex justify-between mb-2">
              <p>{task}</p>
              <button onClick={() => removeTask(project, task)}>Clear</button>
            </li>
          )
        })}
      </ul>)}
    </div>
  )
});

export default ProjectDetails;
