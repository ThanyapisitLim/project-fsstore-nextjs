import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/Navbar01";


export const metadata: Metadata = {
  title: "Store",
  description: "Store Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center mt-5">
          <NavigationMenuDemo />
        </div>
        {children}
      </body>
    </html>
  );
}
