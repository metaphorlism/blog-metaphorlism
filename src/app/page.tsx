import Image from "next/image";
import GitHubIcon from "@/assets/GitHubIcon.svg";
import FacebookIcon from "@/assets/FacebookIcon.svg";
import InstagramIcon from "@/assets/InstagramIcon.svg";
import Link from "next/link";
import HomeBlogCard from "./HomeBlogCard";

export default function Page() {
  return (
    <main className="px-5 md:w-[48rem] md:mx-auto">
      <div className="h-80 bg-slate-500 mt-2 rounded-xl overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1682001426601-c7fdc9ea5b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          width={1920}
          height={1080}
          alt="Banner"
          className="w-full h-full"
        ></Image>
      </div>
      <h1 className="font-convergence text-xl my-2 uppercase">Blogs</h1>
      <div className="capitalize grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5 place-items-center">
        {HomeBlogCard("sunt aut facere repellat")}
        {HomeBlogCard("qui est esse")}
        {HomeBlogCard(
          "ea molestias quasi exercitationem repellat qui ipsa sit aut"
        )}
        {HomeBlogCard("eum et est occaecati")}
        {HomeBlogCard("nesciunt quas odio")}
      </div>
      <h1 className="font-convergence text-xl my-2 uppercase">Follow Us</h1>
      <ul className="capitalize">
        <Link href={"https://github.com/metaphorlism"} target="_blank">
          <li className="flex gap-2 my-2">
            <Image src={GitHubIcon} width={32} height={32} alt="GitHub Icon" />
            GitHub
          </li>
        </Link>
        <Link href={"https://facebook.com/metaphorlism"} target="_blank">
          <li className="flex gap-2 my-2">
            <Image
              src={FacebookIcon}
              width={32}
              height={32}
              alt="Facebook Icon"
            />
            Facebook
          </li>
        </Link>
        <Link href={"https://instagram.com/metaphorlism"} target="_blank">
          <li className="flex gap-2 my-2">
            <Image
              src={InstagramIcon}
              width={32}
              height={32}
              alt="Instagram Icon"
            />
            Instagram
          </li>
        </Link>
      </ul>
    </main>
  );
}
