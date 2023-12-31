import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import prisma from "../../../../prisma/client"
export default async function handler(req:NextApiRequest, res: NextApiResponse){
  if (req.method === "GET"){
    try {
      const data = await prisma.goal.findMany()
      res.status(200).json(data)
    } catch (err){
      res.status(401).json({message:"Error while fetching goals"})
    }
    res.status(200).json({req: "ok"})
  } else if (req.method === "POST") {
    const session = await getServerSession(req,res,authOptions)
    if (!session){
      return res.status(401).json({message:"Please sign in to continue"})
    }
    const {title, description, completionDate} = req.body
    const prismaUser = await prisma.user.findUnique({
      where: {email: session?.user?.email}
    })
    // Validation
    if (!title.length){
      return res.status(403).json({message:"Goal name cannot be empty"})
    }
    // Now create the goal
    try{
      const result = await prisma.goal.create({
        data: {
          title, 
          description,
          userId: prismaUser.id
        }
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({err})
    }
  } else {

  }
}
