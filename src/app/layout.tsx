import "../globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "../components/NavigationBar";
import { UserProvider } from "@/contexts/UserContextProvider";
import { UpdaterProvider } from "@/contexts/UpdaterContextProvider";
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
      <UpdaterProvider>
        <html lang="en">
          <body className={`${inter.className}`}>
            <NavigationBar />
            <div className="flex min-h-[100vh]  justify-center bg-[#f4f4f4]">
              <div className="md:w-[1000px] max-md:w-[100vw] bg-white">
                {children}
              </div>
            </div>
          </body>
        </html>
      </UpdaterProvider>
    </UserProvider>
  );
}
