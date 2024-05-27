// importing images
import Image from "next/image";
import reactIcon from "@/public/react-icon-large.png";

// importing components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#282D35] h-screen">
      <Navbar />
      <div className="text-white w-max py-14 px-10">
        <Image className="absolute right-0 top-[33%]" src={reactIcon} alt="React icon" />
        <h1 className="font-bold text-5xl mb-6">Fun facts about React</h1>
        <ul className="mx-16 list-disc max-w-[25rem]">
          <li className="py-2 marker:text-[#61DAFB] marker:text-2xl">Was first released in 2013</li>
          <li className="py-2 marker:text-[#61DAFB] marker:text-2xl">Was originally created by Jordan Walke</li>
          <li className="py-2 marker:text-[#61DAFB] marker:text-2xl">Has well over 100k stars on GitHub</li>
          <li className="py-2 marker:text-[#61DAFB] marker:text-2xl">Is maintained by the Meta</li>
          <li className="py-2 marker:text-[#61DAFB] marker:text-2xl">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
