"use client";
import MagnifyingGlassIcon from "@/assets/MagnifyingGlassIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGE_ACTIVE_STYLE = {
  active: "bg-[#7c3aed] text-white px-7 py-1 rounded-2xl shadow",
  inactive: "px-7 py-1 rounded-2xl outline outline-2 bg-transparent text-black",
};

const PAGE_NAME = ["blogs", "about-us"];

function NavigationBar() {
  const router = usePathname();
  const pageName = PAGE_NAME.includes(router.split("/")[1])
    ? router.split("/")[1]
    : "home";

  return (
    <div className="border-b-2 border-purple-200 sticky top-0 bg-inherit z-50">
      <div className="flex h-20 justify-between items-center px-5 max-w-360 mx-auto ">
        <div className="md:w-56 p-2">
          <Image
            src="/descriptions/logo.png"
            height={64}
            width={64}
            className="rounded-full"
            alt="Metaphorlism logo"
          ></Image>
        </div>
        <div className="hidden lg:flex gap-10 flex-1 justify-center">
          <Link href={"/"}>
            <button
              className={
                pageName === "home"
                  ? PAGE_ACTIVE_STYLE.active
                  : PAGE_ACTIVE_STYLE.inactive
              }
            >
              Home
            </button>
          </Link>
          <Link href={`/blogs`}>
            <button
              className={
                pageName === "blogs"
                  ? PAGE_ACTIVE_STYLE.active
                  : PAGE_ACTIVE_STYLE.inactive
              }
            >
              Blogs
            </button>
          </Link>
          <Link href={`/about-us`}>
            <button
              className={
                pageName === "about-us"
                  ? PAGE_ACTIVE_STYLE.active
                  : PAGE_ACTIVE_STYLE.inactive
              }
            >
              About Us
            </button>
          </Link>
        </div>
        <div className="relative">
          <input
            type="search"
            id="search"
            className="block w-48 md:w-56 p-2 px-4 pr-10 bg-inherit shadow rounded-2xl placeholder-[#7c3aed] focus:outline focus:outline-1 focus:outline-[#7c3aed] text-[#7c3aed]"
            placeholder="Search"
            autoComplete="off"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <Image
              priority
              src={MagnifyingGlassIcon}
              height={32}
              width={32}
              alt="Follow us on Twitter"
              className="w-5 h-5 text-[#7c3aed]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
