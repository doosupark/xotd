import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-4 p-4">
      <Link href="/" className="font-bold text-lg hover:text-purple-600 transition-colors">MBTI 일본 이름 생성기</Link>
      <Link href="/translator" className="font-bold text-lg hover:text-purple-600 transition-colors">한글 이름 일본어 변환기</Link>
    </nav>
  );
} 