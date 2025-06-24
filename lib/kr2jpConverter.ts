// 한글 이름/성 일본어 변환 TypeScript 모듈 (ESM)

// 초성/중성/종성 매핑 및 분해 함수
const CHOSEONG_JUNGSEONG_MAP_ADVANCED: string[][] = [
  ['カ', 'ケ', 'キャ', 'キェ', 'コ', 'ケ', 'キョ', 'キェ', 'コ', 'クァ', 'クェ', 'ケ', 'ク', 'クォ', 'クェ', 'クィ', 'キュ', 'ク', 'クィ', 'キ', 'キ'], // ㄱ
  ['カ', 'ケ', 'キャ', 'キェ', 'コ', 'ケ', 'キョ', 'キェ', 'コ', 'クァ', 'クェ', 'ケ', 'ク', 'クォ', 'クェ', 'クィ', 'キュ', 'ク', 'クィ', 'キ', 'キ'], // ㄲ
  ['ナ', 'ネ', 'ニャ', 'ニェ', 'ノ', 'ネ', 'ニョ', 'ニェ', 'ノ', 'ヌァ', 'ヌェ', 'ネ', 'ヌ', 'ヌォ', 'ヌェ', 'ヌィ', 'ニュ', 'ヌ', 'ヌィ', 'ニ', 'ニ'], // ㄴ
  ['タ', 'テ', 'チャ', 'チェ', 'ト', 'テ', 'チョ', 'チェ', 'ト', 'トゥァ', 'トゥェ', 'テ', 'トゥ', 'トゥォ', 'トゥェ', 'テュィ', 'テュ', 'トゥ', 'テュィ', 'ティ', 'ティ'], // ㄷ
  ['タ', 'テ', 'チャ', 'チェ', 'ト', 'テ', 'チョ', 'チェ', 'ト', 'トゥァ', 'トゥェ', 'テ', 'トゥ', 'トゥォ', 'トゥェ', 'テュィ', 'テュ', 'トゥ', 'テュィ', 'ティ', 'ティ'], // ㄸ
  ['ラ', 'レ', 'リャ', 'リェ', 'ロ', 'レ', 'リョ', 'リェ', 'ロ', 'ルァ', 'ルェ', 'レ', 'ル', 'ルォ', 'ルェ', 'ルィ', 'リュ', 'ル', 'ルィ', 'リ', 'リ'], // ㄹ
  ['マ', 'メ', 'ミャ', 'ミェ', 'モ', 'メ', 'ミョ', 'ミェ', 'モ', 'ムァ', 'ムェ', 'メ', 'ム', 'ムォ', 'ムェ', 'ムィ', 'ミュ', 'ム', 'ムィ', 'ミ', 'ミ'], // ㅁ
  ['パ', 'ペ', 'ピャ', 'ピェ', 'ポ', 'ペ', 'ピョ', 'ピェ', 'ポ', 'プァ', 'プェ', 'ペ', 'プ', 'プォ', 'プェ', 'プィ', 'ピュ', 'プ', 'プィ', 'ピ', 'ピ'], // ㅂ
  ['パ', 'ペ', 'ピャ', 'ピェ', 'ポ', 'ペ', 'ピョ', 'ピェ', 'ポ', 'プァ', 'プェ', 'ペ', 'プ', 'プォ', 'プェ', 'プィ', 'ピュ', 'プ', 'プィ', 'ピ', 'ピ'], // ㅃ
  ['サ', 'セ', 'シャ', 'シェ', 'ソ', 'セ', 'ショ', 'シェ', 'ソ', 'スァ', 'スェ', 'セ', 'ス', 'スォ', 'スェ', 'スィ', 'シュ', 'ス', 'スィ', 'シ', 'シ'], // ㅅ
  ['サ', 'セ', 'シャ', 'シェ', 'ソ', 'セ', 'ショ', 'シェ', 'ソ', 'スァ', 'スェ', 'セ', 'ス', 'スォ', 'スェ', 'スィ', 'シュ', 'ス', 'スィ', 'シ', 'シ'], // ㅆ
  ['ア', 'エ', 'ヤ', 'イェ', 'オ', 'エ', 'ヨ', 'イェ', 'オ', 'ワ', 'ウェ', 'ウェ', 'ウェ', 'ウ', 'ウォ', 'ウェ', 'ウィ', 'ユ', 'ウ', 'ウィ', 'イ', 'イ'], // ㅇ
  ['ジャ', 'ジェ', 'ジャ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジュァ', 'ジュェ', 'ジェ', 'ジュ', 'ジュォ', 'ジュェ', 'ジュィ', 'ジュ', 'ジュ', 'ジュィ', 'ジ', 'ジ'], // ㅈ
  ['ジャ', 'ジェ', 'ジャ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジュァ', 'ジュェ', 'ジェ', 'ジュ', 'ジュォ', 'ジュェ', 'ジュィ', 'ジュ', 'ジュ', 'ジュィ', 'ジ', 'ジ'], // ㅉ
  ['チャ', 'チェ', 'チャ', 'チェ', 'チョ', 'チェ', 'チョ', 'チェ', 'チョ', 'チュァ', 'チュェ', 'チェ', 'チュ', 'チュォ', 'チュェ', 'チュィ', 'チュ', 'チュ', 'チュィ', 'チ', 'チ'], // ㅊ
  ['カ', 'ケ', 'キャ', 'キェ', 'コ', 'ケ', 'キョ', 'キェ', 'コ', 'クァ', 'クェ', 'ケ', 'ク', 'クォ', 'クェ', 'クィ', 'キュ', 'ク', 'クィ', 'キ', 'キ'], // ㅋ
  ['タ', 'テ', 'チャ', 'チェ', 'ト', 'テ', 'チョ', 'チェ', 'ト', 'トゥァ', 'トゥェ', 'テ', 'トゥ', 'トゥォ', 'トゥェ', 'テュィ', 'テュ', 'トゥ', 'テュィ', 'ティ', 'ティ'], // ㅌ
  ['パ', 'ペ', 'ピャ', 'ピェ', 'ポ', 'ペ', 'ピョ', 'ピェ', 'ポ', 'プァ', 'プェ', 'ペ', 'プ', 'プォ', 'プェ', 'プィ', 'ピュ', 'プ', 'プィ', 'ピ', 'ピ'], // ㅍ
  ['ハ', 'ヘ', 'ヒャ', 'ヒェ', 'ホ', 'ヘ', 'ヒョ', 'ヒェ', 'ホ', 'ファ', 'フェ', 'ヘ', 'フ', 'フォ', 'フェ', 'フィ', 'ヒュ', 'フ', 'フィ', 'ヒ', 'ヒ'], // ㅎ
];

const JONGSEONG_MAP_ADVANCED: string[] = [
  '', 'ク', 'ク', 'ク', 'ン', 'ン', 'ン', 'ト', 'ル', 'ク', 'ム', 'プ', 'ル', 'ル', 'プ', 'ル', 'ム', 'プ', 'プ', 'ト', 'ト', 'ト', 'ト', 'ト', 'ク', 'ト', 'プ', 'ト',
];

const JONGSEONG_TO_CHOSEONG_LIAISON_MAP_ADVANCED: Record<number, number> = {
  1: 0, 2: 0, 3: 0, 4: 2, 5: 2, 6: 2, 7: 12, 8: 5, 9: 0, 10: 6, 11: 7, 12: 5, 13: 5, 14: 7, 15: 5, 16: 6, 17: 7, 18: 7, 19: 12, 20: 12, 22: 12, 23: 12, 24: 0, 25: 12, 26: 7, 27: 12
};

function decomposeHangulAdvanced(char: string) {
  const charCode = char.charCodeAt(0);
  if (charCode >= 0xac00 && charCode <= 0xd7a3) {
    const base = charCode - 0xac00;
    const jongseongIdx = base % 28;
    const jungseongIdx = Math.floor(base / 28) % 21;
    const choseongIdx = Math.floor(base / (28 * 21));
    return { choseong: choseongIdx, jungseong: jungseongIdx, jongseong: jongseongIdx };
  }
  return null;
}

function hangulToKatakanaAdvanced(hangulName: string): string {
  let katakanaName = "";
  let i = 0;
  while (i < hangulName.length) {
    const char = hangulName[i];
    const decomposed = decomposeHangulAdvanced(char);
    let processed_by_liaison = false;
    if (decomposed) {
      const { choseong, jungseong, jongseong } = decomposed;
      if (
        choseong < 0 ||
        choseong >= CHOSEONG_JUNGSEONG_MAP_ADVANCED.length ||
        jungseong < 0 ||
        jungseong >= 21
      ) {
        katakanaName += char;
        i++;
        continue;
      }
      if (jongseong > 0 && i + 1 < hangulName.length) {
        const next_char = hangulName[i + 1];
        const next_decomposed = decomposeHangulAdvanced(next_char);
        if (next_decomposed && next_decomposed.choseong === 11) {
          if (next_decomposed.jungseong < 0 || next_decomposed.jungseong >= 21) {
            // skip
          } else if (jongseong === 21) {
            const base_katakana = CHOSEONG_JUNGSEONG_MAP_ADVANCED[choseong][jungseong];
            const coda_katakana = JONGSEONG_MAP_ADVANCED[jongseong];
            const next_vowel_katakana = CHOSEONG_JUNGSEONG_MAP_ADVANCED[next_decomposed.choseong][next_decomposed.jungseong];
            katakanaName += base_katakana + coda_katakana + next_vowel_katakana;
            if (next_decomposed.jongseong > 0) {
              if (next_decomposed.jongseong < JONGSEONG_MAP_ADVANCED.length) {
                katakanaName += JONGSEONG_MAP_ADVANCED[next_decomposed.jongseong];
              }
            }
            i += 2;
            processed_by_liaison = true;
          } else {
            const liaison_choseong_idx = JONGSEONG_TO_CHOSEONG_LIAISON_MAP_ADVANCED[jongseong];
            if (
              liaison_choseong_idx !== undefined &&
              liaison_choseong_idx >= 0 &&
              liaison_choseong_idx < CHOSEONG_JUNGSEONG_MAP_ADVANCED.length
            ) {
              const base_katakana = CHOSEONG_JUNGSEONG_MAP_ADVANCED[choseong][jungseong];
              const liaison_katakana_part = CHOSEONG_JUNGSEONG_MAP_ADVANCED[liaison_choseong_idx][next_decomposed.jungseong];
              katakanaName += base_katakana + liaison_katakana_part;
              if (next_decomposed.jongseong > 0) {
                if (next_decomposed.jongseong < JONGSEONG_MAP_ADVANCED.length) {
                  katakanaName += JONGSEONG_MAP_ADVANCED[next_decomposed.jongseong];
                }
              }
              i += 2;
              processed_by_liaison = true;
            }
          }
        }
      }
      if (!processed_by_liaison) {
        const syllableKatakana = CHOSEONG_JUNGSEONG_MAP_ADVANCED[choseong][jungseong];
        if (jongseong > 0) {
          if (jongseong < JONGSEONG_MAP_ADVANCED.length) {
            const codaKatakana = JONGSEONG_MAP_ADVANCED[jongseong];
            katakanaName += syllableKatakana + codaKatakana;
          } else {
            katakanaName += syllableKatakana;
          }
        } else {
          katakanaName += syllableKatakana;
        }
        i++;
      }
    } else if (char.trim() === '') {
      if (katakanaName.length > 0 && !katakanaName.endsWith(' ')) {
        katakanaName += ' ';
      } else if (katakanaName.length === 0 && char === ' ') {
        katakanaName += ' ';
      }
      i++;
    } else {
      katakanaName += char;
      i++;
    }
  }
  return katakanaName.replace(/\s+/g, ' ').trim();
}

export class Kr2JpConverter {
  // --- 성씨 변환용 매핑 (SURNAME_MAP) ---
  static SURNAME_MAP: Record<string, string> = {
    '김': 'キム', '이': 'イ', '박': 'パク', '최': 'チェ', '정': 'チョン',
    '강': 'カン', '조': 'チョ', '윤': 'ユン', '장': 'チャン', '임': 'イム',
    '한': 'ハン', '오': 'オ', '서': 'ソ', '신': 'シン', '권': 'クォン',
    '황': 'ファン', '안': 'アン', '송': 'ソン', '전': 'チョン', '홍': 'ホン',
    '유': 'ユ', '고': 'コ', '문': 'ムン', '양': 'ヤン', '손': 'ソン',
    '배': 'ペ', '백': 'ペク', '허': 'ホ', '남': 'ナム', '심': 'シム',
    '노': 'ノ', '하': 'ハ', '곽': 'クァク', '성': 'ソン', '차': 'チャ',
    '주': 'チュ', '우': 'ウ', '구': 'ク', '민': 'ミン', '류': 'リュ',
    '나': 'ナ', '진': 'チン', '지': 'チ', '엄': 'オム', '채': 'チェ',
    '원': 'ウォン', '천': 'チョン', '방': 'パン', '공': 'コン', '현': 'ヒョン',
    '함': 'ハム', '변': 'ピョン', '염': 'ヨム', '여': 'ヨ', '추': 'チュ',
    '도': 'ト', '소': 'ソ', '석': 'ソク', '선': 'ソン', '설': 'ソル',
    '마': 'マ', '길': 'キル', '연': 'ヨン', '위': 'ウィ', '표': 'ピョ',
    '명': 'ミョン', '기': 'キ', '반': 'パン', '라': 'ラ', '왕': 'ワン',
    '금': 'クム', '옥': 'オク', '육': 'ユク', '인': 'イン', '맹': 'メン',
    '제': 'チェ', '모': 'モ', '탁': 'タク', '빈': 'ピン', '어': 'オ',
    '단': 'タン', '야': 'ヤ', '저': 'チョ', '즙': 'チュプ', '증': 'チュン',
    '미': 'ミ', '피': 'ピ', '쾌': 'クェ', '탄': 'タン', '포': 'ポ',
    '교': 'キョ', '뇌': 'ネ', '두': 'トゥ', '등': 'トゥン', '상': 'サン',
    '순': 'スン', '승': 'スン', '시': 'シ', '애': 'エ', '예': 'イェ',
    '요': 'ヨ', '운': 'ウン', '자': 'チャ', '잠': 'チャム', '점': 'チョム',
    '좌': 'チャ', '준': 'チュン', '창': 'チャン', '초': 'チョ', '총': 'チョン',
    '팽': 'ペン', '평': 'ピョン', '풍': 'プン', '학': 'ハク', '해': 'ヘ',
    '혁': 'ヒョク', '형': 'ヒョン', '호': 'ホ', '화': 'ファ', '환': 'ファン',
    '후': 'フ', '흥': 'フン',
    // 2음절 이상 성씨 일부 (예시)
    '남궁': 'ナムグン', '동방': 'トンバン', '사공': 'サゴン', '서문': 'ソムン',
    '선우': 'ソンウ', '제갈': 'チェガル', '황보': 'ファンボ', '독고': 'トッコ',
    '등정': 'トゥンジョン', '망절': 'マンジョル', '무본': 'ムボン', '소봉': 'ソボン',
    '황목': 'ファンモク', '어금': 'オグム', '장곡': 'チャンゴク',
  };

  // 성 변환 (SURNAME_MAP 우선, 없으면 그대로 반환)
  static convertFamilyName(familyName: string): string {
    return Kr2JpConverter.SURNAME_MAP[familyName] || familyName;
  }

  // 이름 변환 (한글 -> 가타카나 변환)
  static convertGivenNameToKatakana(givenName: string): string {
    return hangulToKatakanaAdvanced(givenName);
  }

  // 가타카나 -> 히라가나 변환 (간단 매핑)
  static convertKatakanaToHiragana(katakana: string): string {
    // 유니코드 변환 (カ타カナ 0x30A1~0x30F6 → ひらがな 0x3041~0x3096)
    return katakana.replace(/[\u30A1-\u30F6]/g, (char) =>
      String.fromCharCode(char.charCodeAt(0) - 0x60)
    );
  }
} 