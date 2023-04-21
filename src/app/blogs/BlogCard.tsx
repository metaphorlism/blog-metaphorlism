import IntoIcon from "@/assets/IntoIcon.svg";
import Image from "next/image";
import Link from "next/link";

interface IBlogCardProps {
  title: string;
  image: string;
  description: string;
  id: number;
}

function BlogCard({ title, image, description, id }: IBlogCardProps) {
  return (
    <div className="overflow-hidden flex flex-col lg:flex-row lg:w-[60rem] lg:h-32 bg-white rounded-2xl shadow my-5 mx-7 lg:mx-auto w-fit">
      <div className="w-full h-40 overflow-hidden flex justify-center items-center lg:w-32 shrink-0">
        <Image
          priority
          height={128}
          width={128}
          src={image}
          alt="Image of the blog's post"
          className="w-full"
        />
      </div>
      <div className="py-2 px-5 text-black w-64 mb-auto lg:w-auto lg:mb-0">
        <h1 className="text-base lg:text-xl font-bold h-6 lg:h-7 overflow-clip">
          {title}
        </h1>
        <p className="text-sm lg:text-base text-slate-500 h-28 overflow-clip lg:h-auto">
          {description}
        </p>
      </div>
      <Link href={`/blogs/${id}`}>
        <div className="ml-auto bg-slate-700 lg:h-full lg:w-20 cursor-pointer grid place-items-center flex-shrink-0 w-full h-10">
          <Image
            priority
            src={IntoIcon}
            height={48}
            width={48}
            alt="Get into the blog's post"
            className="w-10 h-10"
          />
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
