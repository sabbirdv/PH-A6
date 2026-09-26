import React from 'react';
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Nav from "./sheardComponents/Nav";
import Footer from "./sheardComponents/Footer";
import MyPlanContext from './context/MyPlanContext';

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
      className={`${inter.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0D] ">
        <MyPlanContext>
        
        <Nav/>
        


        {children}
        
        <Footer/>
        <ToastContainer />
        </MyPlanContext>
        </body>
    </html>
  );
}
