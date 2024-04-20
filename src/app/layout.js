
import ChatbotComponent from "@/components/ChatbotComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Giverly Prototype",
  description: "Ideas on Giverly improvement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Navbar/>
     <ChatbotComponent/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
