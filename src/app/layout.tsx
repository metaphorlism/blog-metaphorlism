import "./globals.css";
import NavigationBar from "@/app/NavigationBar";
import MobileNavigationBar from "@/app/MobileNavigationBar";
import Script from "next/script";

export const metadata = {
  title: "Metaphorlism",
  description: "Turn metaphor into reality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid grid-rows-defaultLayout lg:block scrollbar">
        <NavigationBar />
        {children}
        <MobileNavigationBar />
        <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js" strategy="beforeInteractive" id="cdn-highlight-js"></Script>
      </body>
    </html>
  );
}
