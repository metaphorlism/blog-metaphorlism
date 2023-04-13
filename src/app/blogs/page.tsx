import BlogCard from "@/components/cards/BlogCard";
import { Convergence } from "next/font/google";

const convergence = Convergence({ weight: "400", subsets: ["latin"] });

async function getBlogs({ numberLimit = 10 }): Promise<
  Array<{
    id: number;
    title: string;
    body: string;
  }>
> {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
}

export default async function Blogs() {
  const blogs = await getBlogs({});

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
      {blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            image="https://images.unsplash.com/photo-1680770536739-1120e9b0d7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            title={blog.title}
            description={blog.body}
            id={blog.id}
          ></BlogCard>
        );
      })}
    </main>
  );
}
