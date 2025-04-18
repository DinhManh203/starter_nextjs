'use client'


import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        {loading ? (
          //   <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
          //   <ClipLoader color="#3b82f6" loading={loading} size={50} />
          // </div>
          <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <ClipLoader color="#00ff99" loading={loading} size={50} />
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
