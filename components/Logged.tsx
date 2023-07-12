"use client"
import React from 'react'
import Image from "next/image"
import {signOut} from "next-auth/react"
import Link from 'next/link'
function Logged({image}: {image: string}) {
  return (
    <li className='flex flex-col gap-8 items-center'>
      <Link href={"/dashboard"}>
        <Image 
          width={64} 
          height={64} 
          src={image}
          alt=""
          className='rounded-full w-14'/>
      </Link>
      <button onClick={() => signOut()}>Sign out</button>

    </li>
  )
}

export default Logged