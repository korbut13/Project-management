import { useRef, forwardRef} from "react";

const Tasks = forwardRef(function Tasks({selectedProject, updateProjects}, addTaskRef){
  const inputRef = useRef();

  const tasks = selectedProject.tasks;

  // function handleAddtask(){
  //   const newTask = inputRef.current.value;
  //   updatePojects(prevProjects => [...prevProjects, {...selectedProject, tasks:[newTask, ...tasks]}])
  // };

  return(
    <>
      <h2>Tasks</h2>
      <div className="flex gap-2">
        <input ref={addTaskRef} type="text"></input>
        <button onClick={() => updateProjects(selectedProject)}>Add task</button>
      </div>
      {!tasks.length && <p>This project does not have any tasks yet.</p>}
      {tasks.length && <ul>
        {tasks.map(task => {
          return (
            <li key={task}>
              <p>{task}</p>
              <button>Clear</button>
            </li>
          )
        })}
      </ul>}
    </>
  )
});

export default Tasks;
