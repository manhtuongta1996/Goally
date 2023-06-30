"use client"
import Goal from "@/components/Goal"
import { GoalType } from "@/types/Goal"
import { ReactNode } from "react"

export default function Home() {
  const mockData: GoalType[] = [
    {
      id: "something",
      title: "Get Goally done",
      description: "Developing the goally site"
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Developing the goally site"
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Developing the goally site"
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Developing the goally site"
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Developing the goally site"
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Developing the goally site"
    }
  ]
  return (
    <main className="mt-4 grid grid-cols-3 gap-4">
     {
      mockData.map<ReactNode>((goal: GoalType, goalIndex: number) => {
        return <Goal key={goalIndex} {...goal}/>
      })
     }
    </main>
  )
}
