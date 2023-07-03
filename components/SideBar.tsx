import React, {ReactNode} from 'react'
import {BsPlus, BsFillLightningFill} from "react-icons/bs"
import {FaFire, FaPoo} from "react-icons/fa"
type SideBarIconProps = {
  icon: ReactNode
}
function SideBar() {
  const SideBarIcon = (props:SideBarIconProps) => {
    return (
      <div className="sidebar-icon">
        {props.icon}
      </div>
    )
  }
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-blackApp text-white shadow-lg'>
      <SideBarIcon icon={<FaFire size={28} />} />
      <SideBarIcon icon={<BsPlus size={32} />} />
      <SideBarIcon icon={<BsFillLightningFill size={20} />} />
      <SideBarIcon icon={<FaPoo size={20} />} />
    </div>
  )
}

export default SideBar