export default function ProjectDesctiption({title, date, description}){
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p>{title}</p>
        <button>Delete</button>
      </div>
      <p>{date}</p>
      <p>{description}</p>
      <div>TASKS</div>
    </div>
  )
}
