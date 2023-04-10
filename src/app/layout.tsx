import NavigationBar from "@/components/NavigationBar";
import "./globals.css";

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
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
