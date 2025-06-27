"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center gap-2 p-2 w-full">
      <Link
        href="/"
        className={`font-bold text-[0.8rem] md:text-[0.6rem] hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-2 py-1 rounded-md text-center w-full md:flex-1 ${
          pathname === "/" ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" : "text-gray-700 dark:text-gray-300"
        }`}
      >
        MBTI 일본 이름 생성기
      </Link>
      <Link
        href="/translator"
        className={`font-bold text-[0.8rem] md:text-[0.6rem] hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-2 py-1 rounded-md text-center w-full md:flex-1 ${
          pathname === "/translator" ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" : "text-gray-700 dark:text-gray-300"
        }`}
      >
        한글 이름 일본어 변환기
      </Link>
    </nav>
  );
} 