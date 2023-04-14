import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import DefaultLayout from "@/layouts/DefaultLayout";

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
      <body className="grid grid-rows-defaultLayout lg:block">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
