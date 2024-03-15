import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/navbar";
// const inter = Inter({ subsets: ["latin"] });
import styles from "./page.module.css";
import Footer from "./components/footer";
export const metadata: Metadata = {
  title: "Haltak",
  description: "For the help of peoples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body style={{fontFamily:"Noto Nastaliq Urdu", textAlign:"right"}}>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" />
        <Navbar />
        {children}
        <Footer/>
        <script src="https://kit.fontawesome.com/94794741f1.js" ></script>
      </body>
    </html>
  );
}
