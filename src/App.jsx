import { useState } from "react";

import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  const [isClickedNewProject, setIsClickedNewProject] = useState(false);

  return (
    <div className="flex gap-8">
      <SideBar/>
      <Content/>
    </div>
  );
}

export default App;
