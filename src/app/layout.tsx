import "./globals.css";
import NavigationBar from "@/app/NavigationBar";
import MobileNavigationBar from "@/app/MobileNavigationBar";

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
      </body>
    </html>
  );
}
