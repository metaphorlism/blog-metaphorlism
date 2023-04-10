import BlogCard from "@/components/cards/BlogCard";
import { Convergence } from "next/font/google";

const convergence = Convergence({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between text-black w-[60rem] mx-auto mt-3">
        <div>
          <h1 className={`${convergence.className} text-xl`}>All Contents</h1>
          <h2 className="text-[#777777] text-base">Up to date</h2>
        </div>
        <div>
          <h1 className={`${convergence.className} text-xl`}>21 contents</h1>
          <h2 className="text-[#777777] text-base">23-March-2023</h2>
        </div>
      </div>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </main>
  );
}
