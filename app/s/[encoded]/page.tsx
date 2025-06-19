import { Metadata } from "next";

function decodeBase64(str: string) {
  const padded = str + "=".repeat((4 - str.length % 4) % 4);
  return Buffer.from(padded, "base64").toString("utf-8");
}

export async function generateMetadata({ params }: { params: { encoded: string } }): Promise<Metadata> {
  const decoded = decodeBase64(params.encoded);
  const data = JSON.parse(decoded);

  const mbti = data.m;
  const gender = data.g;
  const hiragana = decodeURIComponent(data.h);
  const katakana = decodeURIComponent(data.k);
  const korean = decodeURIComponent(data.n);
  const index = data.i;

  const ogImageUrl = `https://xotd.net/images/og-results/${mbti.toLowerCase()}-${gender}-${index}.webp`;

  return {
    title: `${mbti} ${gender === "male" ? "남성" : "여성"} 일본 이름 - ${korean} | xotd.net`,
    description: `${mbti} ${gender === "male" ? "남성" : "여성"}의 일본 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
    openGraph: {
      images: [ogImageUrl],
    },
    twitter: {
      images: [ogImageUrl],
    },
  };
}

export default function Page({ params }: { params: { encoded: string } }) {
  const decoded = decodeBase64(params.encoded);
  const data = JSON.parse(decoded);

  const query = new URLSearchParams({
    mbti: data.m,
    gender: data.g,
    hiragana: decodeURIComponent(data.h),
    katakana: decodeURIComponent(data.k),
    korean: decodeURIComponent(data.n),
    index: data.i.toString(),
  }).toString();

  const redirectUrl = `https://xotd.net/?${query}`;

  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${redirectUrl}`} />
      </head>
      <body>
        <p>잠시만 기다려주세요...</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "${redirectUrl}";`,
          }}
        />
      </body>
    </html>
  );
} 