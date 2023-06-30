"use client"
import Goal from "@/components/Goal"
import NavBar from "@/components/NavBar"
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
    <>
      <main className="mt-4">
        <section className="grid lg:grid-cols-3 md:grid-cols-2 mx:grid-cols-1 gap-4">
          {
            mockData.map<ReactNode>((goal: GoalType, goalIndex: number) => {
              return <Goal key={goalIndex} {...goal}/>
            })
          }
        </section>
      </main>
    </>
    
  )
}
