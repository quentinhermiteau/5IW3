"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import { createContext, useState } from "react";
import ThemeProvider from "@/providers/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const toto = [{}, {}, {}]

// [...toto, {}]

// const obj = {a: {}, b: {}, c: {}}

// { ...obj, c: {...obj.c, value: ''}}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="container"
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <div id="content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
