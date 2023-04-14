"use client";
import MobileNavigationBar from "@/components/MobileNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IDefaultLayoutProps {
  children: ReactNode;
}

const PAGE_NAME = ["blogs", "about-us"];

function DefaultLayout({ children }: IDefaultLayoutProps) {
  const router = usePathname();
  const pageName = PAGE_NAME.includes(router.split("/")[1])
    ? router.split("/")[1]
    : "home";

  return (
    <>
      <NavigationBar activePage={pageName} />
      {children}
      <MobileNavigationBar activePage={pageName} />
    </>
  );
}

export default DefaultLayout;
