import { useState, useRef} from "react";

import SideBar from "./components/SideBar";
import EmptyContent from "./components/EmptyContent";
import AddingNewProject from "./components/AddingNewProject";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [isClickedNewProject, setIsClickedNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);

  const formRef = useRef();
  const addTaskRef = useRef();

  function handleClickAddNewProject(){
    setIsClickedNewProject(prev => !prev);
    setSelectedProject(null)
  }

  function handleClickSaveNewProject(title,description,date){
    const dateObject = new Date(date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    const newProject = {
      title,
      description,
      date: formattedDate,
      tasks:[]
    };
    setAllProjects(prevProjects => [...prevProjects, newProject]);
    setIsClickedNewProject(prev => !prev);
    setSelectedProject(null);
  }

  function handleOpenProject(title){
    const selectedProject = allProjects.find(project => project.title === title)
    setSelectedProject(selectedProject);
  }

  function updateSelectedProject(selectedProject){
    const task = addTaskRef.current.value;
    const tasks = selectedProject.tasks;
    selectedProject.tasks = [task, ...tasks];

    const indexSelectedProject = allProjects.findIndex(project => project.title === selectedProject.title);

    setAllProjects(prevProjects => {
      prevProjects.splice(indexSelectedProject, 1, selectedProject);
      return [...prevProjects]
    });
    addTaskRef.current.value = '';
  }

  function removeTask(selectedProject, task){
    const tasks = selectedProject.tasks;
    const indexRemovedTask = tasks.findIndex(el => el === task);
    tasks.splice(indexRemovedTask, 1);
    setAllProjects(prevProjects => [...prevProjects])
  }

  function removeProject(title){
    const indexRemovedProject = allProjects.findIndex(project => project.title === title);
    const projects = allProjects;
    projects.splice(indexRemovedProject, 1);
    setAllProjects(projects);
    setSelectedProject(null);
  }

  function handleClose(){
    setIsClickedNewProject(false)
  }

  return (
    <div className="flex gap-10">
      <SideBar  onClickAddProject={handleClickAddNewProject} onClickOpenProject={handleOpenProject} projects={allProjects}/>
      {(!isClickedNewProject && !selectedProject) && <EmptyContent onClickAddProject={handleClickAddNewProject}/>}
      {(isClickedNewProject && !selectedProject) && <AddingNewProject onClickSave={handleClickSaveNewProject} handleClose={handleClose}/>}
      {selectedProject && <ProjectDetails selectedProject={selectedProject} updateProjects={updateSelectedProject} removeTask={removeTask} removeProject={removeProject} ref={addTaskRef}/>}

    </div>
  );
}

export default App;
