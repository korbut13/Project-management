import { useState } from "react";

import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  const [isClickedNewProject, setIsClickedNewProject] = useState(true);

  function handleClickAddNewProject(){
    setIsClickedNewProject(prev => !prev);
  }

  return (
    <div className="flex gap-10">
      <SideBar onClickAddProject={handleClickAddNewProject}/>
      <Content isClickedNewProject={isClickedNewProject}/>
    </div>
  );
}

export default App;
