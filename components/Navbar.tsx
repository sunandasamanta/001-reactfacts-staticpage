

//importing modules
import Image from "next/image"


// importing 
import reactLogo from "@/public/react-logo.png"

export default function Navbar() {
  return (
    <header>
      <nav className="flex flex-wrap gap-4 justify-between px-8 content-center h-20 bg-[#21222A] shadow-2xl">
        <div className="flex gap-1">
          <Image src={reactLogo} className="w-7" alt="" />
          <h2 className="text-[#61DAFB] font-medium text-xl">ReactFacts</h2>
        </div>
        <p className="text-[#DEEBF8]">React Course - Project 1</p>
      </nav>
    </header>
  )
}
