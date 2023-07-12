import React, {ReactNode} from 'react'
import {BsPlus, BsFillLightningFill} from "react-icons/bs"
import {FaFire, FaPoo} from "react-icons/fa"
import Login from './Login'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Logged from './Logged'
import Image from "next/image"
import Link from "next/link"
async function SideBar() {
  const SideBarIcon = (props) => {
    return (
      <div className="sidebar-icon">
        {props.icon}
      </div>
    )
  }
  const session = await getServerSession(authOptions)
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-blackApp text-white shadow-lg'>
      {!session?.user && <Login />}
      {session?.user && <Logged image={session.user?.image} />}
      <Link href="/">
        <SideBarIcon icon={<Image src="/home-icon.png" width={35} height={35} alt=""/>} />
      </Link>
      <Link href={"/add-goal"}>
        <SideBarIcon icon={<BsPlus size={32} />} />
      </Link>
      <SideBarIcon icon={<BsFillLightningFill size={20} />} />
      <SideBarIcon icon={<FaPoo size={20} />} />
    </div>
  )
}

export default SideBar