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
    <div className="overflow-hidden flex w-[60rem] h-32 mx-auto bg-white rounded-2xl shadow my-5">
      <Image
        priority
        height={128}
        width={128}
        src={image}
        alt="Image of the blog's post"
      />
      <div className="py-2 px-5 text-black">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-slate-500">{description}</p>
      </div>
      <Link href={`/blogs/${id}`}>
        <div className="ml-auto bg-slate-700 h-full w-20 cursor-pointer grid place-items-center flex-shrink-0">
          <Image
            priority
            src={IntoIcon}
            height={48}
            width={48}
            alt="Get into the blog's post"
          />
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
