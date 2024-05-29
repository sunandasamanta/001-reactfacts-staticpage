import React from 'react'

export default function Footer({darkMode} : {darkMode: boolean}) {
    return (
        <footer className={`${darkMode ? 'bg-[#21222A]' : 'bg-white text-black'} shadow-lg text-white shadow-4xl h-12 w-full absolute bottom-0 flex flex-wrap justify-center content-center`}>
            ©️ 2024 Bakshi. All rights reserved.
        </footer>
    )
}
