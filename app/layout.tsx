import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AdBanner from "@/components/AdBanner";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XOTD - MBTI 일본 이름 생성기",
  description: "MBTI 기반 일본 이름 생성 및 한글 이름 일본어 변환 서비스.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}>  
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* PC: 좌측 네비/광고, 모바일: 상단 CI */}
          <aside className="hidden md:flex md:flex-col md:w-56 md:min-h-screen border-r border-gray-200 bg-white">
            <div className="flex items-center justify-center h-20 border-b border-gray-100">
              <Image src="/images/CI/CI_Logo_small.png" alt="XOTD CI" width={48} height={48} />
            </div>
            <Navigation />
            <div className="mt-auto mb-4">
              <AdBanner position="side" />
            </div>
          </aside>
          <main className="flex-1 flex flex-col min-h-screen">
            {/* 모바일 헤더 CI */}
            <header className="md:hidden flex items-center justify-center h-16 border-b border-gray-100 bg-white">
              <Image src="/images/CI/CI_Logo_small.png" alt="XOTD CI" width={40} height={40} />
            </header>
            <div className="flex-1 w-full max-w-xl mx-auto px-2 sm:px-4 py-4">
              {children}
            </div>
            {/* 모바일 네비게이션 (출력 하단) */}
            <nav className="md:hidden border-t border-gray-200 bg-white">
              <Navigation />
            </nav>
            {/* 하단 광고 영역 (공통) */}
            <footer>
              <AdBanner position="bottom" />
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
