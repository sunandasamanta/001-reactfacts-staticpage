import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#282D35] h-screen">
      <Navbar />
      <div className="text-white w-max m-28">
        <h1 className="font-bold text-5xl mb-10">Fun facts about React</h1>
        <div className="mx-16">
          <p className="">Was first released in 2013</p>
          <p className="">Was originally created by Jordan Walke</p>
          <p className="">Has well over 100k stars on GitHub</p>
          <p className="">Is maintained by the Meta</p>
          <p className="">Powers thousands of enterprise apps</p>
        </div>
      </div>
    </main>
  );
}
