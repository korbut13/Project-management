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

  return (
    <div className="flex gap-10">
      <SideBar  onClickAddProject={handleClickAddNewProject} onClickOpenProject={handleOpenProject} projects={allProjects}/>
      {(!isClickedNewProject && !selectedProject) && <EmptyContent/>}
      {isClickedNewProject && <AddingNewProject onClickSave={handleClickSaveNewProject}/>}
      {selectedProject && <ProjectDetails selectedProject={selectedProject} updateProjects={updateSelectedProject} ref={addTaskRef}/>}

    </div>
  );
}

export default App;
