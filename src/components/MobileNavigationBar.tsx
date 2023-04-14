import Image from "next/image";
import { Convergence } from "next/font/google";

const convergence = Convergence({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

import HomeIcon from "@/assets/navigation/home.svg";
import BlogsIcon from "@/assets/navigation/blogs.svg";
import AboutUsIcon from "@/assets/navigation/about-us.svg";
import Link from "next/link";

const ACTIVE_STYLE = {
  WebkitFilter:
    "brightness(0) saturate(100%) invert(29%) sepia(47%) saturate(6060%) hue-rotate(252deg) brightness(93%) contrast(100%)",
  filter:
    "brightness(0) saturate(100%) invert(29%) sepia(47%) saturate(6060%) hue-rotate(252deg) brightness(93%) contrast(100%)",
};

function MobileNavigationBar({ activePage }: { activePage: string }) {
  return (
    <div className="flex lg:hidden sticky bottom-0 bg-inherit justify-center gap-16 sm:gap-32 rounded-t-xl border-t-2 border-primary py-1 items-center">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Image
            src={HomeIcon}
            width={32}
            height={32}
            alt="Home Icon"
            style={activePage === "home" ? ACTIVE_STYLE : {}}
          />
          <p
            className={`${convergence.className} text-sm sm:text-lg ${
              activePage === "home" ? "text-primary" : null
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
            style={activePage === "blogs" ? ACTIVE_STYLE : {}}
          />
          <p
            className={`${convergence.className} text-sm sm:text-lg ${
              activePage === "blogs" ? "text-primary" : null
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
            style={activePage === "about-us" ? ACTIVE_STYLE : {}}
          />
          <p
            className={`${convergence.className} text-sm sm:text-lg ${
              activePage === "about-us" ? "text-primary" : null
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
