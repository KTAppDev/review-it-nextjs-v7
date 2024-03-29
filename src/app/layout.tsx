import "@/app/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "./util/QueryProvider";
import JotaiProvider from "./util/JotaiProvider";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata = {
  title: "Review It",
  description:
    "Review It is a website where you can share and read reviews on anything. It is easy, fun, and free to use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JotaiProvider>
      <ClerkProvider>
        <QueryProvider>
          <html className="bg-myTheme-lightbg dark:bg-myTheme-niceBlack" lang="en">
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </head>
            <body className={`${poppins.className} bg-myTheme-lightbg dark:bg-myTheme-niceBlack `}>
              <Navbar>{children}</Navbar>
            </body>
          </html>
        </QueryProvider>
      </ClerkProvider>
    </JotaiProvider>
  );
}
