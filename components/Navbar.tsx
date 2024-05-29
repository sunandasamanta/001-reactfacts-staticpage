
import Image from 'next/image'
import reactLogo from '../public/react-logo.png'


export default function Navbar({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) {
  return (
    <header>
      <nav className={`flex flex-wrap gap-4 justify-between px-8 content-center h-20 ${darkMode ? 'bg-[#21222A]' : 'bg-white'} shadow-2xl`}>
        <div className="flex gap-1">
          <Image src={reactLogo} className="w-7" alt="" />
          <h2 className="text-[#61DAFB] font-medium text-xl">ReactFacts</h2>
        </div>
        <button
          className={`${darkMode ? 'text-white' : 'text-[#61DAFB]'}`}
          onClick={() => toggleDarkMode()}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  )
}
