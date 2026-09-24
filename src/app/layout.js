import { Inter } from "next/font/google";
import React from 'react';
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Nav from "./sheardComponents/Nav";
import Footer from "./sheardComponents/Footer";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "FIT-LOG",
  description: "Create by Sabbir Hasan ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        
        <Nav/>
        


        {children}
        
        <Footer/>
        <ToastContainer />
        </body>
    </html>
  );
}
