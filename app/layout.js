import { Inter } from "next/font/google";
import { Navbar } from "./components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Where in the world?",
  description:
    "A visual API that let you see all of the countries all around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
