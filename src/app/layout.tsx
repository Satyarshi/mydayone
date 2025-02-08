import type { Metadata } from "next";
import Header from "@/components/home/Header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/home/Footer";
import { ToastContainer } from "react-toastify";
import connectMongo from "@/lib/mongodb";
import JobOpening from "@/model/JobOpenings";
import { GoogleAnalytics } from '@next/third-parties/google'

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

export const metadata: Metadata = {
  title: "MyDayOne | Home",
  description: "MyDayOne is a suite that helps you to start your day with a positive mindset.",
  keywords: "MyDayOne, positive mindset, start your day",
};

// Function to check for job openings
async function checkJobOpenings() {
  await connectMongo();
  const jobOpenings = await JobOpening.find();
  return jobOpenings.length > 0; // Return true if there are job openings
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showCareers = await checkJobOpenings(); // Check job openings

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <GoogleAnalytics gaId="G-PEJWFY563S" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header showCareers={showCareers} />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
