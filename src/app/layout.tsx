import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleTranslate } from "./components/googleTranslate/Translate";
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/navbar";
// const inter = Inter({ subsets: ["latin"] });
import styles from "./page.module.css";
import Footer from "./components/footer";
export const metadata: Metadata = {
  title: "Haltak - Ultimate Urdu Content Hub for Education, Ethics, Business, Food, and More",
  description: "Explore a diverse range of Urdu content on Haltak, featuring in-depth articles on تعلیم و تربیت (Education and Training), اخلاقیات (Ethics), تجارت (Business), خوراک (Food), معلومات پاکستانی شعبہ جات (Information on Pakistani Sectors), and مسائل کا حل (Problem Solving). Stay informed and engaged with content crafted for the Urdu-speaking community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
      </head>
      <body style={{ fontFamily: "Noto Nastaliq Urdu", textAlign: "right" }}>
        <GoogleTranslate />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" />
        <Navbar />
        {children}
        <Footer />
        <script src="https://kit.fontawesome.com/94794741f1.js" ></script>
        <Script
          id="google-translate-script"
          // strategy="afterInteractive" // Load after interactive content
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </body>
    </html>
  );
}
