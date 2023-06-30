import { GoalType } from "@/types/Goal"
function Goal(GoalProps: GoalType) {
  return (
    <div className="goal-card flex flex-col mx-4">
      <div>
        <img src="./default-goal-img.png" alt="" height={200} width={200} />
      </div>
      <div className="card-title">
        <p>{GoalProps.title}</p>
      </div>
      <div className="card-info">

      </div>
      <div className="card-action">

      </div>
    </div>
  )
}

export default Goal