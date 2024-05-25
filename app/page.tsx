import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#282D35] h-screen">
      <Navbar />
      <div className="text-white w-max m-20">
        <h1 className="font-bold text-5xl mb-6">Fun facts about React</h1>
        <ul className="mx-16 list-disc disc-blue">
          <li className="">Was first released in 2013</li>
          <li className="">Was originally created by Jordan Walke</li>
          <li className="">Has well over 100k stars on GitHub</li>
          <li className="">Is maintained by the Meta</li>
          <li className="">Powers thousands of enterprise apps</li>
        </ul>
      </div>
    </main>
  );
}
