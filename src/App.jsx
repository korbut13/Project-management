import { useState, useRef} from "react";

import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import AddNewProject from "./components/AddNewProject";
import ProjectDetails from "./components/ProjectDetails";
import ModalWarning from "./components/ModalWarning";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects:[]
  });

  const [isClickedNewProject, setIsClickedNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);

  const [openWarning, setOpenWarning] = useState(false);

  const addTaskRef = useRef();

  let content;

  if(projectsState.selectedProject === undefined){
    content = <NoProjectSelected onClickAddProject={handleClickAddNewProject}/>
  }else if(projectsState.selectedProject === null){
    content = <AddNewProject onClickSave={handleClickSaveNewProject} onClickClose={handleCloseAddNewProject}/>
  }else if(projectsState.selectedProject){
    content = <ProjectDetails project={projectsState.selectedProject} deleteProject={deleteProject} updateProjects={updateSelectedProject} removeTask={removeTask} ref={addTaskRef}/>
  }

  function handleClickAddNewProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    });
  };

  function handleCloseAddNewProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    })
  };

  function handleClickSaveNewProject(title,description,date){
    if(!title.length || !date.length){
      setOpenWarning(true);
    }else{
      const dateObject = new Date(date);
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      const formattedDate = dateObject.toLocaleDateString('en-US', options);
      const newProject = {
        title,
        description,
        date: formattedDate,
        tasks:[]
      };
      setProjectsState(prevState => {
        return {
          selectedProject: undefined,
          projects: [...prevState.projects, newProject]
        }
      });
    }
  };

  function handleOpenProject(title){
    const selectedProject = projectsState.projects.find(project => project.title === title);
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject
      }
    });
  };

  function deleteProject(){
    setProjectsState(prevState => {
      return {
        projects: prevState.projects.filter(project => project.title !== prevState.selectedProject.title),
        selectedProject:undefined,
      }
    });
  };

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

  return (
    <main className="flex gap-8 h-screen mt-8">
      <SideBar  onClickAddProject={handleClickAddNewProject} projects={projectsState.projects} onClickOpenProject={handleOpenProject} selectedProject={projectsState.selectedProject}/>
      {/* <ModalWarning isOpen={openWarning}/> */}
      {content}
    </main>
  );
}

export default App;
