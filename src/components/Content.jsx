import EmptyContent from "./EmptyContent";
import AddingNewProject from "./AddingNewProject";

export default function Content({isClickedNewProject}){
  return (
    <div className="flex flex-col gap-8 items-center mt-16 w-7/12">
      {!isClickedNewProject && <EmptyContent/>}
      {isClickedNewProject && <AddingNewProject/>}
    </div>
  )
}
