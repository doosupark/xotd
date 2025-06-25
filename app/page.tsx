import MBTIPageClient from './components/MBTIPageClient';
import { generateMetadata } from './metadata';

// 메타데이터 export 추가
export { generateMetadata };

export default function Home() {
  return <MBTIPageClient />;
}
