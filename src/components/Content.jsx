import { forwardRef } from "react";

import EmptyContent from "./EmptyContent";
import AddingNewProject from "./AddingNewProject";
import ProjectDesctiption from "./ProjectDescription";

const Content = forwardRef(function Content({isClickedNewProject, onClickSave, selectedProject}, ref){
  let contentMaterial = <EmptyContent/>;

  if(isClickedNewProject){
    contentMaterial = <AddingNewProject onClickSave={onClickSave} ref={ref}/>
  }else if(selectedProject && !isClickedNewProject){
    contentMaterial = <ProjectDesctiption {...selectedProject}/>;
  }

  return (
    <div className="flex flex-col gap-8 items-center mt-16 w-7/12">
      {/* {selectedProject && <ProjectDesctiption {...selectedProject}/>}
      {!isClickedNewProject && <EmptyContent/>}
      {isClickedNewProject && <AddingNewProject onClickSave={onClickSave} ref={ref}/>} */}
      {contentMaterial}
    </div>
  )
});

export default Content;
