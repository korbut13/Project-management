import { useState, useRef} from "react";

import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  const [isClickedNewProject, setIsClickedNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);

  const formRef = useRef();

  function handleClickAddNewProject(){
    setIsClickedNewProject(prev => !prev);
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
    //formRef.current.clear()
    console.log(formRef.current)
  }

  function handleClickOpenProject(title){
    const selectedProject = allProjects.find(project => project.title === title)
    setSelectedProject(selectedProject);
  }

  function updateSelectedProject(selectedProject, task){
    const tasks = selectedProject.tasks;
    selectedProject.tasks = [task, ...tasks];

    const indexSelectedProject = allProjects.findIndex(project => project.title === selectedProject.title);

    setAllProjects(prevProjects => {
      prevProjects.splice(indexSelectedProject, 1, selectedProject);
      return [...prevProjects]
    });

  }

  return (
    <div className="flex gap-10">
      <SideBar  onClickAddProject={handleClickAddNewProject} onClickOpenProject={handleClickOpenProject} projects={allProjects}/>
      <Content  isClickedNewProject={isClickedNewProject} onClickSave={handleClickSaveNewProject} selectedProject={selectedProject} updateProjects={updateSelectedProject} ref={formRef}/>
    </div>
  );
}

export default App;
