export default function ProjectDesctiption({title, date, description}){
  return (
    <>
      <div className="flex justify-between w-full">
        <p className="text-stone-600 text-2xl font-bold">{title}</p>
        <button className="text-xs">Delete</button>
      </div>
      <p className="text-stone-400 text-sm font-bold">{date}</p>
      <p className="border-b-2 border-b-stone-300 pb-4">{description}</p>
      <div>TASKS</div>
    </>
  )
}
