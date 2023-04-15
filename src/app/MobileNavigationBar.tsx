"use client";
import Image from "next/image";
import HomeIcon from "@/assets/navigation/home.svg";
import BlogsIcon from "@/assets/navigation/blogs.svg";
import AboutUsIcon from "@/assets/navigation/about-us.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE_STYLE = {
  WebkitFilter:
    "brightness(0) saturate(100%) invert(29%) sepia(47%) saturate(6060%) hue-rotate(252deg) brightness(93%) contrast(100%)",
  filter:
    "brightness(0) saturate(100%) invert(29%) sepia(47%) saturate(6060%) hue-rotate(252deg) brightness(93%) contrast(100%)",
};

const PAGE_NAME = ["blogs", "about-us"];

function MobileNavigationBar() {
  const router = usePathname();
  const pageName = PAGE_NAME.includes(router.split("/")[1])
    ? router.split("/")[1]
    : "home";

  return (
    <div className="flex lg:hidden sticky bottom-0 bg-inherit justify-center gap-14 sm:gap-32 rounded-t-xl border-t-2 border-primary py-1 items-center z-50">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Image
            src={HomeIcon}
            width={32}
            height={32}
            alt="Home Icon"
            style={pageName === "home" ? ACTIVE_STYLE : {}}
          />
          <p
            className={`font-convergence text-sm sm:text-lg ${
              pageName === "home" ? "text-primary" : null
            }`}
          >
            Home
          </p>
        </div>
      </Link>
      <Link href="/blogs">
        <div className="flex flex-col items-center">
          <Image
            src={BlogsIcon}
            width={32}
            height={32}
            alt="Blogs Icon"
            style={pageName === "blogs" ? ACTIVE_STYLE : {}}
          />
          <p
            className={`font-convergence text-sm sm:text-lg ${
              pageName === "blogs" ? "text-primary" : null
            }`}
          >
            Blogs
          </p>
        </div>
      </Link>
      <Link href="/about-us">
        <div className="flex flex-col items-center">
          <Image
            src={AboutUsIcon}
            width={32}
            height={32}
            alt="About us Icon"
            style={pageName === "about-us" ? ACTIVE_STYLE : {}}
          />
          <p
            className={`font-roboto text-sm sm:text-lg ${
              pageName === "about-us" ? "text-primary" : null
            }`}
          >
            About Us
          </p>
        </div>
      </Link>
    </div>
  );
}

export default MobileNavigationBar;
