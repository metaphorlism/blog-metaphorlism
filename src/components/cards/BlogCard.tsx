import IntoIcon from "@/assets/IntoIcon.svg";
import Image from "next/image";

function BlogCard() {
  return (
    <div className="overflow-hidden flex w-[60rem] h-32 mx-auto bg-white rounded-2xl shadow my-5">
      <Image
        priority
        height={128}
        width={128}
        src="https://images.unsplash.com/photo-1680770536739-1120e9b0d7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        alt="Image of the blog's post"
      />
      <div className="py-2 px-5 text-black">
        <h1 className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          eveniet, corrupti distinctio recusandae natus
        </p>
      </div>
      <div className="ml-auto bg-slate-700 h-full w-20 cursor-pointer grid place-items-center">
        <Image
          priority
          src={IntoIcon}
          height={48}
          width={48}
          alt="Get into the blog's post"
        />
      </div>
    </div>
  );
}

export default BlogCard;
