import { useState, useRef} from "react";

import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  const [isClickedNewProject, setIsClickedNewProject] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const formRef = useRef();

  function handleClickAddNewProject(){
    setIsClickedNewProject(prev => !prev);
  }

  function handleClickSaveNewProject(title,description,date){
    console.log(date)
    const dateObject = new Date(date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    const newProject = {
      title,
      description,
      date: formattedDate
    };
    setAllProjects(prevProjects => [...prevProjects, newProject]);
    setIsClickedNewProject(prev => !prev);
    setSelectedProject(null);
    //formRef.current.clear()
    console.log(formRef.current)
  }

  function handleSelectProject(projectName){
    setSelectedProject(projectName);
  }

  return (
    <div className="flex gap-10">
      <SideBar onSelectProject={handleSelectProject} onClickAddProject={handleClickAddNewProject} projects={allProjects}/>
      <Content selectedProject={selectedProject} isClickedNewProject={isClickedNewProject} onClickSave={handleClickSaveNewProject} ref={formRef}/>
    </div>
  );
}

export default App;
