import Button from "./Button";

import Logo from "../assets/no-projects.png";

export default function NoProjectSelected({onClickAddProject}){
  return(
    <div className="flex flex-col gap-8 items-center mt-16 w-7/12">
      <img src={Logo} alt="No projects" className="h-16 w-16"/>
      <h2>No project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button onClick={onClickAddProject}>Create new project</Button>
    </div>
  )
}
