import Image from "next/image";
import Link from "next/link";

function HomeBlogCard(title: string) {
  return (
    <Link href={"/blogs/" + title}>
      <div className="w-32 h-36 overflow-clip bg-primary/70 text-slate-100 my-2 gap-5 rounded relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1682148708195-32a41d488235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
          }
          width={1920}
          height={1080}
          alt={title}
          className="h-full bg-white"
        ></Image>
        <div className="whitespace-nowrap px-1 text-center absolute bottom-0 left-0 right-0 bg-slate-600 p-2">
          {title.substring(0, 15)}
        </div>
      </div>
    </Link>
  );
}

export default HomeBlogCard;
