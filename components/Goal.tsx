import { GoalType } from "@/types/Goal"
function Goal(GoalProps: GoalType) {
  return (
    <div className="goal-card flex flex-col mx-4 shadow-border">
      <div>
        <img src="./default-goal-img.png" alt="" height={200} width={200} />
      </div>
      <div className="card-title">
        <h1 className="font-bold text-xl italic">{GoalProps.title}</h1>
      </div>
      <div className="card-info mt-2">
        <p className="card-desc">{GoalProps.description}</p>
      </div>
      <div className="card-action mt-4">
        <button className="card-btn">View</button>
      </div>
    </div>
  )
}

export default Goal