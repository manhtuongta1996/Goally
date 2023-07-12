"use client"
import Goal from "@/components/Goal"
import { GoalType } from "@/types/Goal"
import React, { ReactNode } from "react"
import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import LoadingScreen from "@/components/LoadingScreen"
const getAllGoals = async () => {
  const response = await axios.get("/api/v1/goals")
  return response.data
}
export default function Home() {
  
  const {data, error, isLoading} = useQuery({
      queryFn: getAllGoals,
      queryKey:["goals"]
    }
  )
  if (error) return error
  if (isLoading) return <LoadingScreen />
  if (data){
    console.log(data)
  }
  const mockData: GoalType[] = [
    {
      id: "something",
      title: "Get Goally done",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: "something",
      title: "Get Goally done",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
  return (
    <>
      <main>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 mx:grid-cols-1 gap-4 gap-y-8 mt-4">
          {
            data.map((goal:GoalType, goalIndex:number) => {
              return <Goal key={goalIndex} {...goal}/>
            })
          }
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
