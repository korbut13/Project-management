import { forwardRef } from "react";

import EmptyContent from "./EmptyContent";
import AddingNewProject from "./AddingNewProject";
import ProjectDesctiption from "./ProjectDescription";

const Content = forwardRef(function Content({isClickedNewProject, onClickSave, selectedProject, updateProjects}, ref){
  let contentMaterial = <EmptyContent/>;
  let classNameContent = "flex flex-col gap-8 items-center mt-16 w-7/12";

  if(isClickedNewProject){
    contentMaterial = <AddingNewProject onClickSave={onClickSave} ref={ref}/>
  }else if(selectedProject && !isClickedNewProject){
    contentMaterial = <ProjectDesctiption selectedProject={selectedProject} updateProjects={updateProjects}/>;
    classNameContent = "flex flex-col gap-2 mt-16 w-7/12";
  }

  return (
    <div className={classNameContent}>
      {contentMaterial}
    </div>
  )
});

export default Content;
