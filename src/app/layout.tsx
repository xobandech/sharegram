import "../globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "../components/NavigationBar";
import { UserProvider } from "@/contexts/UserContextProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharegram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <NavigationBar />
          <div className="flex min-h-[100vh]  justify-center bg-[#f4f4f4]">
            <div className="sm:w-[1000px] max-sm:w-[100vw] bg-white">{children}</div>
          </div>
        </body>
      </html>
    </UserProvider>
  );
}
