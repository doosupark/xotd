"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center gap-4 p-4 w-full">
      <Link
        href="/"
        className={`font-bold text-[0.7rem] hover:text-purple-600 transition-colors px-2 py-1 rounded-md text-center w-full ${
          pathname === "/" ? "bg-gray-100" : ""
        }`}
      >
        MBTI 일본 이름 생성기
      </Link>
      <Link
        href="/translator"
        className={`font-bold text-[0.7rem] hover:text-purple-600 transition-colors px-2 py-1 rounded-md text-center w-full ${
          pathname === "/translator" ? "bg-gray-100" : ""
        }`}
      >
        한글 이름 일본어 변환기
      </Link>
    </nav>
  );
} 