import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res: NextApiResponse){
  const {query, method} = req
  if (method === "GET"){
   
      res.status(200).json({req: "something"})
    
  } else if (req.method === "POST") {

  } else {

  }
}
