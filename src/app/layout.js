import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio | danielantcam.dev",
  description: "Welcome to my new portfolio as a Full Stack Web Developer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className="bg-gray-950 w-screen overflow-x-hidden">
        <Navbar />
        <main className="
          px-10
          md:px-40
          xl:px-60
        ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
