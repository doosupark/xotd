/**
 * 한글 초성 매핑 테이블
 */
const CHOSUNG_MAP = {
    'ㄱ': 'キ',
    'ㄲ': 'キ',
    'ㄴ': 'ニ',
    'ㄷ': 'ト',
    'ㄸ': 'ト',
    'ㄹ': 'リ',
    'ㅁ': 'ミ',
    'ㅂ': 'ピ',
    'ㅃ': 'ピ',
    'ㅅ': 'シ',
    'ㅆ': 'シ',
    'ㅇ': 'イ',
    'ㅈ': 'チ',
    'ㅉ': 'チ',
    'ㅊ': 'チ',
    'ㅋ': 'キ',
    'ㅌ': 'ト',
    'ㅍ': 'ピ',
    'ㅎ': 'ヒ'
};

/**
 * 한글 중성 매핑 테이블
 */
const JUNGSUNG_MAP = {
    'ㅏ': 'ア',
    'ㅐ': 'エ',
    'ㅑ': 'ヤ',
    'ㅒ': 'イェ',
    'ㅓ': 'ォ',
    'ㅔ': 'エ',
    'ㅕ': 'ヨ',
    'ㅖ': 'イェ',
    'ㅗ': 'オ',
    'ㅘ': 'ワ',
    'ㅙ': 'ウェ',
    'ㅚ': 'ウェ',
    'ㅛ': 'ヨ',
    'ㅜ': 'ウ',
    'ㅝ': 'ウォ',
    'ㅞ': 'ウェ',
    'ㅟ': 'ウィ',
    'ㅠ': 'ユ',
    'ㅡ': 'ウ',
    'ㅢ': 'ウィ',
    'ㅣ': 'イ'
};

/**
 * 한글 종성 매핑 테이블
 */
const JONGSUNG_MAP = {
    'ㄱ': 'ク',
    'ㄲ': 'ク',
    'ㄳ': 'ク',
    'ㄴ': 'ン',
    'ㄵ': 'ン',
    'ㄶ': 'ン',
    'ㄷ': 'ッ',
    'ㄹ': 'ル',
    'ㄺ': 'ク',
    'ㄻ': 'ム',
    'ㄼ': 'ル',
    'ㄽ': 'ル',
    'ㄾ': 'ル',
    'ㄿ': 'ル',
    'ㅀ': 'ル',
    'ㅁ': 'ム',
    'ㅂ': 'プ',
    'ㅄ': 'プ',
    'ㅅ': 'ス',
    'ㅆ': 'ス',
    'ㅇ': 'ン',
    'ㅈ': 'ッ',
    'ㅊ': 'ッ',
    'ㅋ': 'ク',
    'ㅌ': 'ッ',
    'ㅍ': 'プ',
    'ㅎ': 'ッ'
};

/**
 * 한글 자음을 로마자로 변환하는 매핑
 */
const ROMAJI_MAP = {
    'ㄱ': 'g', 'ㄲ': 'kk', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄸ': 'tt',
    'ㄹ': 'r', 'ㅁ': 'm', 'ㅂ': 'b', 'ㅃ': 'pp', 'ㅅ': 's',
    'ㅆ': 'ss', 'ㅇ': '', 'ㅈ': 'j', 'ㅉ': 'jj', 'ㅊ': 'ch',
    'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h'
};

/**
 * VOCALOID IPA 매핑 테이블
 */
const VOCALOID_IPA_MAP = {
    // 모음 (Vowels)
    'ア': 'a',
    'イ': 'i',
    'ウ': 'M',  // VOCALOID 표기법에서는 'M'으로 표기
    'エ': 'e',
    'オ': 'o',
    'ャ': 'ja',
    'ュ': 'jM',
    'ョ': 'jo',
    
    // 자음 (Consonants)
    'カ': 'ka', 'キ': 'ki', 'ク': 'kM', 'ケ': 'ke', 'コ': 'ko',
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gM', 'ゲ': 'ge', 'ゴ': 'go',
    'サ': 'sa', 'シ': 'Si', 'ス': 'sM', 'セ': 'se', 'ソ': 'so',
    'ザ': 'za', 'ジ': 'zi', 'ズ': 'zM', 'ゼ': 'ze', 'ゾ': 'zo',
    'タ': 'ta', 'チ': 'tSi', 'ツ': 'tsM', 'テ': 'te', 'ト': 'to',
    'ダ': 'da', 'ヂ': 'dzi', 'ヅ': 'dzM', 'デ': 'de', 'ド': 'do',
    'ナ': 'na', 'ニ': 'Ji', 'ヌ': 'nM', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'FM', 'ヘ': 'he', 'ホ': 'ho',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bM', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pM', 'ペ': 'pe', 'ポ': 'po',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mM', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ja', 'ユ': 'jM', 'ヨ': 'jo',
    'ラ': 'Ra', 'リ': 'Ri', 'ル': 'RM', 'レ': 'Re', 'ロ': 'Ro',
    'ワ': 'wa', 'ヲ': 'o', 'ン': 'N',
    
    // 특수 발음
    'ッ': 'Q',  // 촉음
    
    // 복합음
    'キャ': 'kja', 'キュ': 'kjM', 'キョ': 'kjo',
    'シャ': 'Sa', 'シュ': 'SM', 'ショ': 'So',
    'チャ': 'tSa', 'チュ': 'tSM', 'チョ': 'tSo',
    'ニャ': 'Ja', 'ニュ': 'JM', 'ニョ': 'Jo',
    'ヒャ': 'hja', 'ヒュ': 'hjM', 'ヒョ': 'hjo',
    'ミャ': 'mja', 'ミュ': 'mjM', 'ミョ': 'mjo',
    'リャ': 'Rja', 'リュ': 'RjM', 'リョ': 'Rjo'
};

/**
 * 한국 성씨 특수 매핑 테이블
 */
const SURNAME_MAP = {
    // 1음절 성씨
    '김': 'キム',
    '이': 'イ',
    '박': 'パク',
    '최': 'チェ',
    '정': 'チョン',
    '강': 'カン',
    '조': 'チョ',
    '윤': 'ユン',
    '장': 'チャン',
    '임': 'イム',
    '한': 'ハン',
    '오': 'オ',
    '서': 'ソ',
    '신': 'シン',
    '권': 'クォン',
    '황': 'ファン',
    '안': 'アン',
    '송': 'ソン',
    '전': 'チョン',
    '홍': 'ホン',
    '유': 'ユ',
    '고': 'コ',
    '문': 'ムン',
    '양': 'ヤン',
    '손': 'ソン',
    '배': 'ペ',
    '백': 'ペク',
    '허': 'ホ',
    '남': 'ナム',
    '심': 'シム',
    '노': 'ノ',
    '하': 'ハ',
    '곽': 'クァク',
    '성': 'ソン',
    '차': 'チャ',
    '주': 'チュ',
    '우': 'ウ',
    '구': 'ク',
    '민': 'ミン',
    '류': 'リュ',
    '나': 'ナ',
    '진': 'チン',
    '지': 'チ',
    '엄': 'オム',
    '채': 'チェ',
    '원': 'ウォン',
    '천': 'チョン',
    '방': 'パン',
    '공': 'コン',
    '현': 'ヒョン',
    '함': 'ハム',
    '변': 'ピョン',
    '염': 'ヨム',
    '여': 'ヨ',
    '추': 'チュ',
    '도': 'ト',
    '소': 'ソ',
    '석': 'ソク',
    '선': 'ソン',
    '설': 'ソル',
    '마': 'マ',
    '길': 'キル',
    '연': 'ヨン',
    '위': 'ウィ',
    '표': 'ピョ',
    '명': 'ミョン',
    '기': 'キ',
    '반': 'パン',
    '라': 'ラ',
    '왕': 'ワン',
    '금': 'クム',
    '옥': 'オク',
    '육': 'ユク',
    '인': 'イン',
    '맹': 'メン',
    '제': 'チェ',
    '모': 'モ',
    '탁': 'タク',
    '빈': 'ピン',
    '어': 'オ',
    '단': 'タン',
    '야': 'ヤ',
    '저': 'チョ',
    '즙': 'チュプ',
    '증': 'チュン',
    '미': 'ミ',
    '피': 'ピ',
    '쾌': 'クェ',
    '탄': 'タン',
    '포': 'ポ',
    '교': 'キョ',
    '뇌': 'ネ',
    '두': 'トゥ',
    '등': 'トゥン',
    '상': 'サン',
    '순': 'スン',
    '승': 'スン',
    '시': 'シ',
    '애': 'エ',
    '예': 'イェ',
    '요': 'ヨ',
    '운': 'ウン',
    '자': 'チャ',
    '잠': 'チャム',
    '점': 'チョム',
    '좌': 'チャ',
    '준': 'チュン',
    '창': 'チャン',
    '초': 'チョ',
    '총': 'チョン',
    '팽': 'ペン',
    '평': 'ピョン',
    '풍': 'プン',
    '학': 'ハク',
    '해': 'ヘ',
    '혁': 'ヒョク',
    '형': 'ヒョン',
    '호': 'ホ',
    '화': 'ファ',
    '환': 'ファン',
    '후': 'フ',
    '흥': 'フン',
    '갈': 'カル',
    '감': 'カム',
    '개': 'ケ',
    '견': 'キョン',
    '경': 'キョン',
    '계': 'ケ',
    '곡': 'コク',
    '관': 'クァン',
    '궁': 'クン',
    '근': 'クン',
    '난': 'ナン',
    '낭': 'ナン',
    '누': 'ヌ',
    '담': 'タム',
    '당': 'タン',
    '독': 'トク',
    '돈': 'トン',
    '동': 'トン',
    '란': 'ラン',
    '랑': 'ラン',
    '려': 'リョ',
    '로': 'ロ',
    '림': 'リム',
    '만': 'マン',
    '매': 'メ',
    '목': 'モク',
    '묘': 'ミョ',
    '무': 'ム',
    '묵': 'ムク',
    '범': 'ポム',
    '봉': 'ポン',
    '부': 'プ',
    '비': 'ピ',
    '빙': 'ピン',
    '사': 'サ',
    '산': 'サン',
    '삼': 'サム',
    '섭': 'ソプ',
    '수': 'ス',
    '습': 'スプ',
    '아': 'ア',
    '영': 'ヨン',
    '온': 'オン',
    '옹': 'オン',
    '완': 'ワン',
    '용': 'ヨン',
    '은': 'ウン',
    '음': 'ウム',
    '태': 'テ',
    '판': 'パン',
    '회': 'フェ',
    '흘': 'フル',

    // 2음절 이상 성씨
    '남궁': 'ナムグン',
    '동방': 'トンバン',
    '사공': 'サゴン',
    '서문': 'ソムン',
    '선우': 'ソンウ',
    '제갈': 'チェガル',
    '황보': 'ファンボ',
    '독고': 'トッコ',
    '등정': 'トゥンジョン',
    '망절': 'マンジョル',
    '무본': 'ムボン',
    '소봉': 'ソボン',
    '황목': 'ファンモク',
    '어금': 'オグム',
    '장곡': 'チャンゴク'
};

/**
 * 주어진 한글 문자의 초성을 추출합니다.
 * @param {string} char - 한글 문자
 * @returns {string} 초성
 */
function getChosung(char) {
    const code = char.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return char;
    const chosungIndex = Math.floor(code / 28 / 21);
    return String.fromCharCode(0x1100 + chosungIndex);
}

/**
 * 주어진 한글 문자의 중성을 추출합니다.
 * @param {string} char - 한글 문자
 * @returns {string} 중성
 */
function getJungsung(char) {
    const code = char.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return char;
    const jungsungIndex = Math.floor((code / 28) % 21);
    return String.fromCharCode(0x1161 + jungsungIndex);
}

/**
 * 주어진 한글 문자의 종성을 추출합니다.
 * @param {string} char - 한글 문자
 * @returns {string} 종성
 */
function getJongsung(char) {
    const code = char.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return '';
    const jongIndex = code % 28;
    return jongIndex === 0 ? '' : String.fromCharCode(0x11A7 + jongIndex);
}

// 초성 목록
const CHOSUNG_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 중성 목록
const JUNGSUNG_LIST = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];

// 종성 목록
const JONGSUNG_LIST = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/**
 * 주어진 한글 문자를 자모음으로 분리합니다.
 * @param {string} char - 한글 문자
 * @returns {Object} 초성, 중성, 종성 정보
 */
function decomposeHangul(char) {
    const charCode = char.charCodeAt(0);
    
    // 한글 유니코드 범위 체크
    if (charCode < 0xAC00 || charCode > 0xD7A3) {
        throw new Error('올바른 한글이 아닙니다.');
    }
    
    const baseCode = charCode - 0xAC00;
    const jongsung = baseCode % 28;
    const jungsung = ((baseCode - jongsung) / 28) % 21;
    const chosung = (((baseCode - jongsung) / 28) - jungsung) / 21;
    
    return {
        chosung: CHOSUNG_LIST[chosung],
        jungsung: JUNGSUNG_LIST[jungsung],
        jongsung: jongsung > 0 ? JONGSUNG_LIST[jongsung - 1] : ''
    };
}

/**
 * 문자열이 한글인지 확인합니다.
 * @param {string} str - 검사할 문자열
 * @returns {boolean} 한글 여부
 */
function isKorean(str) {
    return /^[가-힣]+$/.test(str);
}

class NameConverter {
    // 초성 로마자 변환 매핑
    static CHOSUNG_TO_ROMAN = {
        'ㄱ': 'g', 'ㄲ': 'kk', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄸ': 'tt',
        'ㄹ': 'r', 'ㅁ': 'm', 'ㅂ': 'b', 'ㅃ': 'pp', 'ㅅ': 's',
        'ㅆ': 'ss', 'ㅇ': '', 'ㅈ': 'j', 'ㅉ': 'jj', 'ㅊ': 'ch',
        'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h'
    };

    // 중성 로마자 변환 매핑
    static JUNGSUNG_TO_ROMAN = {
        'ㅏ': 'a', 'ㅐ': 'ae', 'ㅑ': 'ya', 'ㅒ': 'yae',
        'ㅓ': 'eo', 'ㅔ': 'e', 'ㅕ': 'yeo', 'ㅖ': 'ye',
        'ㅗ': 'o', 'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe',
        'ㅛ': 'yo', 'ㅜ': 'u', 'ㅝ': 'weo', 'ㅞ': 'we',
        'ㅟ': 'wi', 'ㅠ': 'yu', 'ㅡ': 'eu', 'ㅢ': 'ui',
        'ㅣ': 'i'
    };

    // 종성 로마자 변환 매핑
    static JONGSUNG_TO_ROMAN = {
        'ㄱ': 'k', 'ㄲ': 'k', 'ㄳ': 'k', 'ㄴ': 'n',
        'ㄵ': 'n', 'ㄶ': 'n', 'ㄷ': 't', 'ㄹ': 'r',
        'ㄺ': 'k', 'ㄻ': 'm', 'ㄼ': 'l', 'ㄽ': 'l',
        'ㄾ': 'l', 'ㄿ': 'p', 'ㅀ': 'l', 'ㅁ': 'm',
        'ㅂ': 'p', 'ㅄ': 'p', 'ㅅ': 't', 'ㅆ': 't',
        'ㅇ': 'ng', 'ㅈ': 't', 'ㅊ': 't', 'ㅋ': 'k',
        'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h'
    };

    // 로마자 → 가타카나 변환 매핑
    static ROMAN_TO_KATAKANA = {
        // 기본 모음
        'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ',
        
        // 복합 모음
        'ya': 'ヤ', 'yu': 'ユ', 'yo': 'ヨ',
        'wa': 'ワ', 'wo': 'ヲ', 'wi': 'ウィ', 'we': 'ウェ',
        'ae': 'エー', 'ee': 'エー',
        'eo': 'オ', 'eu': 'ウ',
        'oe': 'オエ', 'ui': 'ウイ',
        
        // 기본 자음 + 모음 조합
        'ka': 'カ', 'ki': 'キ', 'ku': 'ク', 'ke': 'ケ', 'ko': 'コ',
        'ga': 'ガ', 'gi': 'ギ', 'gu': 'グ', 'ge': 'ゲ', 'go': 'ゴ',
        'sa': 'サ', 'shi': 'シ', 'su': 'ス', 'se': 'セ', 'so': 'ソ',
        'za': 'ザ', 'ji': 'ジ', 'zu': 'ズ', 'ze': 'ゼ', 'zo': 'ゾ',
        'ta': 'タ', 'chi': 'チ', 'tsu': 'ツ', 'te': 'テ', 'to': 'ト',
        'da': 'ダ', 'di': 'ヂ', 'du': 'ヅ', 'de': 'デ', 'do': 'ド',
        'na': 'ナ', 'ni': 'ニ', 'nu': 'ヌ', 'ne': 'ネ', 'no': 'ノ',
        'ha': 'ハ', 'hi': 'ヒ', 'fu': 'フ', 'he': 'ヘ', 'ho': 'ホ',
        'ba': 'バ', 'bi': 'ビ', 'bu': 'ブ', 'be': 'ベ', 'bo': 'ボ',
        'pa': 'パ', 'pi': 'ピ', 'pu': 'プ', 'pe': 'ペ', 'po': 'ポ',
        'ma': 'マ', 'mi': 'ミ', 'mu': 'ム', 'me': 'メ', 'mo': 'モ',
        'ra': 'ラ', 'ri': 'リ', 'ru': 'ル', 're': 'レ', 'ro': 'ロ',
        
        // 요음 조합
        'kya': 'キャ', 'kyu': 'キュ', 'kyo': 'キョ',
        'gya': 'ギャ', 'gyu': 'ギュ', 'gyo': 'ギョ',
        'nya': 'ニャ', 'nyu': 'ニュ', 'nyo': 'ニョ',
        'hya': 'ヒャ', 'hyu': 'ヒュ', 'hyo': 'ヒョ',
        'bya': 'ビャ', 'byu': 'ビュ', 'byo': 'ビョ',
        'pya': 'ピャ', 'pyu': 'ピュ', 'pyo': 'ピョ',
        'mya': 'ミャ', 'myu': 'ミュ', 'myo': 'ミョ',
        'rya': 'リャ', 'ryu': 'リュ', 'ryo': 'リョ',
        'sha': 'シャ', 'shu': 'シュ', 'sho': 'ショ',
        'cha': 'チャ', 'chu': 'チュ', 'cho': 'チョ',
        'ja': 'ジャ', 'ju': 'ジュ', 'jo': 'ジョ',
        
        // 특수 조합
        'yeo': 'ヨ', 'ye': 'イェ',
        'wae': 'ワエ', 'weo': 'ウォ',
        'kye': 'キェ', 'gye': 'ギェ',
        'nye': 'にぇ', 'hye': 'ひぇ',
        'bye': 'びぇ', 'pye': 'ぴぇ',
        'mye': 'みぇ', 'rye': 'りぇ',
        
        // 이중모음
        'ui': 'ウイ', 'oe': 'オエ',
        'yae': 'ヤエ', 'yeo': 'ヨ',
        'wo': 'ウォ', 'wa': 'ワ',
        'wi': 'ウィ', 'we': 'ウェ',
        
        // 받침
        'n': 'ン', 'm': 'ム', 'ng': 'ン',
        'k': 'ク', 't': 'ト', 'p': 'プ',
        'r': 'ル', 'l': 'ル', 's': 'ス',
        'ch': '', 'j': '', 'h': '',
        
        // 특수 조합
        'che': 'チェ',
        'chye': 'チェ',
        'chwei': 'ちい',
        'yel': 'いぇる', 'yeol': 'いおる'
    };

    // 가타카나 → 로마자 발음 매핑
    static KANA_TO_ROMAJI = {
        // 기본 음절
        'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
        'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
        'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
        'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
        'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
        'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
        'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
        'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
        'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
        'ワ': 'wa', 'ヲ': 'wo',
        
        // 탁음
        'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
        'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
        'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
        'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
        'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
        
        // 요음
        'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
        'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
        'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
        'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo',
        'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
        'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo',
        'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
        'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
        'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo',
        'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo',
        'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo',
        
        // 특수 발음
        'ン': 'n',  // 받침 'ん'
        'ッ': '',   // 촉음
        'ー': '',   // 장음
        
        // 특수 조합
        'チェ': 'che',
        'ジェ': 'je',
        'イェ': 'ye',
        'ウィ': 'wi',
        'ウェ': 'we',
        'ウォ': 'wo'
    };

    // --- _ADVANCED 매핑 테이블들을 static 멤버로 정확하게 재정의 --- 
    static CHOSEONG_JUNGSEONG_MAP_ADVANCED = [
        ['カ', 'ケ', 'キャ', 'キェ', 'コ', 'ケ', 'キョ', 'キェ', 'コ', 'クァ', 'クェ', 'ケ', 'ク', 'クォ', 'クェ', 'クィ', 'キュ', 'ク', 'クィ', 'キ', 'キ'], // 0: ㄱ
        ['カ', 'ケ', 'キャ', 'キェ', 'コ', 'ケ', 'キョ', 'キェ', 'コ', 'クァ', 'クェ', 'ケ', 'ク', 'クォ', 'クェ', 'クィ', 'キュ', 'ク', 'クィ', 'キ', 'キ'], // 1: ㄲ (ㄱ과 동일 매핑)
        ['ナ', 'ネ', 'ニャ', 'ニェ', 'ノ', 'ネ', 'ニョ', 'ニェ', 'ノ', 'ヌァ', 'ヌェ', 'ネ', 'ヌ', 'ヌォ', 'ヌェ', 'ヌィ', 'ニュ', 'ヌ', 'ヌィ', 'ニ', 'ニ'], // 2: ㄴ
        ['タ', 'テ', 'チャ', 'チェ', 'ト', 'テ', 'チョ', 'チェ', 'ト', 'トゥァ', 'トゥェ', 'テ', 'トゥ', 'トゥォ', 'トゥェ', 'テュィ', 'テュ', 'トゥ', 'テュィ', 'ティ', 'ティ'], // 3: ㄷ
        ['タ', 'テ', 'チャ', 'チェ', 'ト', 'テ', 'チョ', 'チェ', 'ト', 'トゥァ', 'トゥェ', 'テ', 'トゥ', 'トゥォ', 'トゥェ', 'テュィ', 'テュ', 'トゥ', 'テュィ', 'ティ', 'ティ'], // 4: ㄸ (ㄷ과 동일 매핑)
        ['ラ', 'レ', 'リャ', 'リェ', 'ロ', 'レ', 'リョ', 'リェ', 'ロ', 'ルァ', 'ルェ', 'レ', 'ル', 'ルォ', 'ルェ', 'ルィ', 'リュ', 'ル', 'ルィ', 'リ', 'リ'], // 5: ㄹ
        ['マ', 'メ', 'ミャ', 'ミェ', 'モ', 'メ', 'ミョ', 'ミェ', 'モ', 'ムァ', 'ムェ', 'メ', 'ム', 'ムォ', 'ムェ', 'ムィ', 'ミュ', 'ム', 'ムィ', 'ミ', 'ミ'], // 6: ㅁ
        ['パ', 'ペ', 'ピャ', 'ピェ', 'ポ', 'ペ', 'ピョ', 'ピェ', 'ポ', 'プァ', 'プェ', 'ペ', 'プ', 'プォ', 'プェ', 'プィ', 'ピュ', 'プ', 'プィ', 'ピ', 'ピ'], // 7: ㅂ
        ['パ', 'ペ', 'ピャ', 'ピェ', 'ポ', 'ペ', 'ピョ', 'ピェ', 'ポ', 'プァ', 'プェ', 'ペ', 'プ', 'プォ', 'プェ', 'プィ', 'ピュ', 'プ', 'プィ', 'ピ', 'ピ'], // 8: ㅃ (ㅂ과 동일 매핑)
        ['サ', 'セ', 'シャ', 'シェ', 'ソ', 'セ', 'ショ', 'シェ', 'ソ', 'スァ', 'スェ', 'セ', 'ス', 'スォ', 'スェ', 'スィ', 'シュ', 'ス', 'スィ', 'シ', 'シ'], // 9: ㅅ
        ['サ', 'セ', 'シャ', 'シェ', 'ソ', 'セ', 'ショ', 'シェ', 'ソ', 'スァ', 'スェ', 'セ', 'ス', 'スォ', 'スェ', 'スィ', 'シュ', 'ス', 'スィ', 'シ', 'シ'], // 10: ㅆ (ㅅ과 동일 매핑)
        ['ア', 'エ', 'ヤ', 'イェ', 'オ', 'エ', 'ヨ', 'イェ', 'オ', 'ワ', 'ウェ', 'ウェ', 'ウェ', 'ウ', 'ウォ', 'ウェ', 'ウィ', 'ユ', 'ウ', 'ウィ', 'イ', 'イ'], // 11: ㅇ (초성)
        ['ジャ', 'ジェ', 'ジャ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジュァ', 'ジュェ', 'ジェ', 'ジュ', 'ジュォ', 'ジュェ', 'ジュィ', 'ジュ', 'ジュ', 'ジュィ', 'ジ', 'ジ'], // 12: ㅈ
        ['ジャ', 'ジェ', 'ジャ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジェ', 'ジョ', 'ジュァ', 'ジュェ', 'ジェ', 'ジュ', 'ジュォ', 'ジュェ', 'ジュィ', 'ジュ', 'ジュ', 'ジュィ', 'ジ', 'ジ'], // 13: ㅉ (ㅈ과 동일 매핑)
        ['チャ', 'チェ', 'チャ', 'チェ', 'チョ', 'チェ', 'チョ', 'チェ', 'チョ', 'チュァ', 'チュェ', 'チェ', 'チュ', 'チュォ', 'チュェ', 'チュィ', 'チュ', 'チュ', 'チュィ', 'チ', 'チ'], // 14: ㅊ
        ['カ', 'ケ', 'キャ', 'キェ', 'コ', 'ケ', 'キョ', 'キェ', 'コ', 'クァ', 'クェ', 'ケ', 'ク', 'クォ', 'クェ', 'クィ', 'キュ', 'ク', 'クィ', 'キ', 'キ'], // 15: ㅋ (ㄱ과 동일 매핑)
        ['タ', 'テ', 'チャ', 'チェ', 'ト', 'テ', 'チョ', 'チェ', 'ト', 'トゥァ', 'トゥェ', 'テ', 'トゥ', 'トゥォ', 'トゥェ', 'テュィ', 'テュ', 'トゥ', 'テュィ', 'ティ', 'ティ'], // 16: ㅌ (ㄷ과 동일 매핑)
        ['パ', 'ペ', 'ピャ', 'ピェ', 'ポ', 'ペ', 'ピョ', 'ピェ', 'ポ', 'プァ', 'プェ', 'ペ', 'プ', 'プォ', 'プェ', 'プィ', 'ピュ', 'プ', 'プィ', 'ピ', 'ピ'], // 17: ㅍ (ㅂ과 동일 매핑)
        ['ハ', 'ヘ', 'ヒャ', 'ヒェ', 'ホ', 'ヘ', 'ヒョ', 'ヒェ', 'ホ', 'ファ', 'フェ', 'ヘ', 'フ', 'フォ', 'フェ', 'フィ', 'ヒュ', 'フ', 'フィ', 'ヒ', 'ヒ'], // 18: ㅎ
    ];

    static JONGSEONG_MAP_ADVANCED = [
        '',    // 0: 없음
        'ク',  // 1: ㄱ, ㅋ, ㄲ, ㄳ, ㄺ (끝소리 ㄱ)
        'ク',  // 2: ㄲ -> ク
        'ク',  // 3: ㄳ -> ク
        'ン',  // 4: ㄴ, ㄵ, ㄶ (끝소리 ㄴ)
        'ン',  // 5: ㄵ -> ン
        'ン',  // 6: ㄶ -> ン
        'ト',  // 7: ㄷ (끝소리 ㄷ) -> 일본어 ト로 매핑
        'ル',  // 8: ㄹ, ㄽ, ㄾ, ㅀ (끝소리 ㄹ)
        'ク',  // 9: ㄺ -> ク
        'ム',  // 10: ㄻ -> ム
        'プ',  // 11: ㄼ -> プ
        'ル',  // 12: ㄽ -> ル
        'ル',  // 13: ㄾ -> ル
        'プ',  // 14: ㄿ -> プ
        'ル',  // 15: ㅀ -> ル
        'ム',  // 16: ㅁ (끝소리 ㅁ)
        'プ',  // 17: ㅂ (끝소리 ㅂ)
        'プ',  // 18: ㅄ -> プ
        'ト',  // 19: ㅅ -> ト (끝소리 ㄷ)
        'ト',  // 20: ㅆ -> ト (끝소리 ㄷ)
        // 21: ㅇ - 연음 시 자음 초성 안됨, 아래 _hangulToKatakanaAdvanced 함수에서 별도 처리
        'ト',  // 22: ㅈ -> ト (끝소리 ㄷ)
        'ト',  // 23: ㅊ -> ト (끝소리 ㄷ)
        'ク',  // 24: ㅋ -> ク
        'ト',  // 25: ㅌ -> ト
        'プ',  // 26: ㅍ -> プ
        'ト',  // 27: ㅎ -> ト (끝소리 ㄷ)
    ];

    static JONGSEONG_TO_CHOSEONG_LIAISON_MAP_ADVANCED = {
         1: 0,  // ㄱ -> ㄱ 소리 (가,갸,거...)
         2: 0,  // ㄲ -> ㄱ 소리
         3: 0,  // ㄳ -> ㄱ 소리
         4: 2,  // ㄴ -> ㄴ 소리 (나,냐,너...)
         5: 2,  // ㄵ -> ㄴ 소리
         6: 2,  // ㄶ -> ㄴ 소리
         7: 12, // ㄷ -> ㅈ 소리 (자,쟈,저...)
         8: 5,  // ㄹ -> ㄹ 소리 (라,랴,러...)
         9: 0,  // ㄺ -> ㄱ 소리
        10: 6,  // ㄻ -> ㅁ 소리 (마,먀,머...)
        11: 7,  // ㄼ -> ㅂ 소리 (바,뱌,버...)
        12: 5,  // ㄽ -> ㄹ 소리
        13: 5,  // ㄾ -> ㄹ 소리
        14: 7,  // ㄿ -> ㅂ 소리
        15: 5,  // ㅀ -> ㄹ 소리
        16: 6,  // ㅁ -> ㅁ 소리
        17: 7,  // ㅂ -> ㅂ 소리
        18: 7,  // ㅄ -> ㅂ 소리
        19: 12, // ㅅ -> ㅈ 소리
        20: 12, // ㅆ -> ㅈ 소리
        // 21: ㅇ - 연음 시 자음 초성 안됨, 아래 _hangulToKatakanaAdvanced 함수에서 별도 처리
        22: 12, // ㅈ -> ㅈ 소리
        23: 12, // ㅊ -> ㅈ 소리
        24: 0,  // ㅋ -> ㄱ 소리
        25: 12, // ㅌ -> ㅈ 소리
        26: 7,  // ㅍ -> ㅂ 소리
        27: 12  // ㅎ -> ㅈ 소리
    };

    // --- _ADVANCED 함수들을 static 메소드로 정의 --- 
    static _decomposeHangulAdvanced(char) {
        const charCode = char.charCodeAt(0);
        if (charCode >= 0xAC00 && charCode <= 0xD7A3) {
            const base = charCode - 0xAC00;
            const jongseongIdx = base % 28;
            const jungseongIdx = Math.floor((base / 28)) % 21;
            const choseongIdx = Math.floor(base / (28 * 21));
            return { choseong: choseongIdx, jungseong: jungseongIdx, jongseong: jongseongIdx };
        }
        return null;
    }

    static _hangulToKatakanaAdvanced(hangulName) {
        let katakanaName = "";
        let i = 0;

        while (i < hangulName.length) {
            const char = hangulName[i];
            const decomposed = NameConverter._decomposeHangulAdvanced(char); 
            let processed_by_liaison = false;

            if (decomposed) {
                const { choseong, jungseong, jongseong } = decomposed;
                // 범위 확인 추가: decomposeHangulAdvanced가 null을 반환하지 않았고, 인덱스가 유효한지 확인
                if (choseong < 0 || choseong >= NameConverter.CHOSEONG_JUNGSEONG_MAP_ADVANCED.length || 
                    jungseong < 0 || jungseong >= 21) { 
                    // 유효하지 않은 인덱스면 원본 문자를 추가하고 다음으로 넘어감
                    console.warn(`Invalid indices found for char '${char}': C:${choseong}, J:${jungseong}. Keeping original char.`);
                    katakanaName += char;
                    i++;
                    continue; 
                }

                if (jongseong > 0 && i + 1 < hangulName.length) {
                    const next_char = hangulName[i + 1];
                    const next_decomposed = NameConverter._decomposeHangulAdvanced(next_char);

                    if (next_decomposed && next_decomposed.choseong === 11) { 
                         // 다음 음절 인덱스 유효성 검사 추가
                         if (next_decomposed.jungseong < 0 || next_decomposed.jungseong >= 21) {
                             console.warn(`Invalid next jungseong index for char '${next_char}': J:${next_decomposed.jungseong}. Processing current char normally.`);
                         } else if (jongseong === 21) {
                             const base_katakana = NameConverter.CHOSEONG_JUNGSEONG_MAP_ADVANCED[choseong][jungseong];
                             const coda_katakana = NameConverter.JONGSEONG_MAP_ADVANCED[jongseong]; 
                             const next_vowel_katakana = NameConverter.CHOSEONG_JUNGSEONG_MAP_ADVANCED[next_decomposed.choseong][next_decomposed.jungseong];
                             katakanaName += base_katakana + coda_katakana + next_vowel_katakana;
                             if (next_decomposed.jongseong > 0) {
                                 // 종성 인덱스 유효성 검사 추가
                                 if (next_decomposed.jongseong < NameConverter.JONGSEONG_MAP_ADVANCED.length) {
                                    katakanaName += NameConverter.JONGSEONG_MAP_ADVANCED[next_decomposed.jongseong];
                                 } else {
                                    console.warn(`Invalid next jongseong index for char '${next_char}': T:${next_decomposed.jongseong}. Skipping coda.`);
                                 }
                             }
                             i += 2;
                             processed_by_liaison = true;
                         } else {
                             const liaison_choseong_idx = NameConverter.JONGSEONG_TO_CHOSEONG_LIAISON_MAP_ADVANCED[jongseong];
                             if (liaison_choseong_idx !== undefined && 
                                 liaison_choseong_idx >= 0 && liaison_choseong_idx < NameConverter.CHOSEONG_JUNGSEONG_MAP_ADVANCED.length) { // 연음 초성 인덱스 유효성 검사 추가
                                  const base_katakana = NameConverter.CHOSEONG_JUNGSEONG_MAP_ADVANCED[choseong][jungseong]; 
                                  const liaison_katakana_part = NameConverter.CHOSEONG_JUNGSEONG_MAP_ADVANCED[liaison_choseong_idx][next_decomposed.jungseong];
                                  katakanaName += base_katakana + liaison_katakana_part;
                                  if (next_decomposed.jongseong > 0) {
                                       // 종성 인덱스 유효성 검사 추가
                                       if (next_decomposed.jongseong < NameConverter.JONGSEONG_MAP_ADVANCED.length) {
                                          katakanaName += NameConverter.JONGSEONG_MAP_ADVANCED[next_decomposed.jongseong];
                                       } else {
                                          console.warn(`Invalid next jongseong index for char '${next_char}': T:${next_decomposed.jongseong}. Skipping coda.`);
                                       }
                                  }
                                  i += 2; 
                                  processed_by_liaison = true;
                             }
                         }
                    }
                }

                if (!processed_by_liaison) {
                    const syllableKatakana = NameConverter.CHOSEONG_JUNGSEONG_MAP_ADVANCED[choseong][jungseong];
                    if (jongseong > 0) {
                         // 종성 인덱스 유효성 검사 추가
                         if (jongseong < NameConverter.JONGSEONG_MAP_ADVANCED.length) {
                            const codaKatakana = NameConverter.JONGSEONG_MAP_ADVANCED[jongseong];
                            katakanaName += syllableKatakana + codaKatakana;
                         } else {
                             console.warn(`Invalid jongseong index for char '${char}': T:${jongseong}. Skipping coda.`);
                             katakanaName += syllableKatakana; // 종성 없이 추가
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

    // --- 기존 static 메소드들 유지 --- 
    static convertToPronunciation(kana) {
        let pronunciation = "";
        // 임시 구현: 간단한 규칙 기반 변환 (추후 개선 필요)
        for (let i = 0; i < kana.length; i++) {
            const char = kana[i];
            // 여기에 VOCALOID_IPA_MAP 등을 활용한 변환 로직이 있을 것으로 예상
            // 현재 파일 내용에는 VOCALOID_IPA_MAP은 있으나 이 함수 내 사용 로직은 보이지 않음.
            // 단순화를 위해 일단 입력된 kana를 그대로 사용하거나, 공백/・ 처리만 추가
            if (char === '・') {
                pronunciation += "・";
            } else {
                pronunciation += VOCALOID_IPA_MAP[char] || char; // 맵에 없으면 원본 문자
            }
        }
        return pronunciation.replace(/・/g, " ").trim(); // 예시로 공백 변환
    }

    static convertName(familyName, givenName, toHiragana = false) {
        let convertedFamilyName = "";
        let convertedGivenName = "";
        let fullKana = "";
        // let pronunciation = ""; // 발음 관련 변수 제거

        if (toHiragana) {
            // 히라가나 변환 로직
            convertedFamilyName = this.convertToKatakana(familyName, true);
            convertedGivenName = this.convertToKatakana(givenName, false);
            fullKana = `${this.convertKatakanaToHiragana(convertedFamilyName)}・${this.convertKatakanaToHiragana(convertedGivenName)}`;
        } else {
            // 가타카나 변환
            convertedFamilyName = this.convertToKatakana(familyName, true);
            convertedGivenName = this.convertToKatakana(givenName, false);
            fullKana = `${convertedFamilyName}・${convertedGivenName}`;
        }
        
        // 발음 변환 로직 제거
        // pronunciation = this.convertToPronunciation(fullKana);

        return {
            japanese: fullKana,
            // pronunciation: pronunciation // 반환 객체에서 pronunciation 제거
        };
    }

    static convertToKatakana(text, isSurname = false) {
        if (isSurname) {
            // 성씨 변환 로직: SURNAME_MAP 우선 사용, 없으면 기존 한글자씩 변환 로직
            if (SURNAME_MAP[text]) {
                return SURNAME_MAP[text];
            }
            // SURNAME_MAP에 없는 성씨는 기존의 단순 변환 방식이나 다른 규칙을 따를 수 있음
            // 이 부분은 기존 utils.js의 성씨 변환 방식을 최대한 유지해야 함.
            // 현재 제공된 utils.js의 최상단 JONGSUNG_MAP 등을 사용하는 기존 로직이 여기에 해당될 수 있음.
            // 아래는 기존 로직이 없다고 가정하고 매우 단순화한 예시임. 실제로는 기존 로직을 복원/활용해야 함.
            let result = "";
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const decomposed = decomposeHangul(char); // 기존 분해 함수 사용
                if (decomposed) {
                    const cho = getChosung(char); // 기존 getChosung 함수
                    const jung = getJungsung(char); // 기존 getJungsung 함수
                    const jong = getJongsung(char); // 기존 getJongsung 함수

                    result += CHOSUNG_MAP[cho] || "";
                    result += JUNGSUNG_MAP[jung] || "";
                    if (jong) {
                        result += JONGSUNG_MAP[jong] || "";
                    }
                } else {
                    result += char;
                }
            }
            return result;

        } else {
            // 이름(given name) 변환 시: 수정된 내부 static 메소드 호출
            return NameConverter._hangulToKatakanaAdvanced(text);
        }
    }

    static convertToIPA(kana) {
        let ipa = "";
        let i = 0;
        
        while (i < kana.length) {
            // 복합음 처리 (예: キャ, シャ 등)
            if (i + 1 < kana.length && 'ャュョ'.includes(kana[i + 1])) {
                const combination = kana[i] + kana[i + 1];
                if (VOCALOID_IPA_MAP[combination]) {
                    ipa += VOCALOID_IPA_MAP[combination];
                    i += 2;
                    continue;
                }
            }
            
            // 촉음(っ/ッ) 처리
            if (kana[i] === 'ッ') {
                if (i + 1 < kana.length) {
                    const nextChar = kana[i + 1];
                    const nextIPA = VOCALOID_IPA_MAP[nextChar];
                    if (nextIPA && nextIPA.length > 0) {
                        // VOCALOID 표기법에서는 Q로 표시
                        ipa += 'Q';
                    }
                }
                i++;
                continue;
            }
            
            // 일반 문자 처리
            const ipaChar = VOCALOID_IPA_MAP[kana[i]] || kana[i];
            ipa += ipaChar;
            i++;
        }
        
        return `[${ipa}]`;
    }

    static convertToHiragana(text) {
        // 특수 발음 규칙 확인
        if (this.SPECIAL_HIRAGANA[text]) {
            return this.SPECIAL_HIRAGANA[text];
        }

        let result = "";
        for (let i = 0; i < text.length; i++) {
            const syllable = text[i];
            const { chosung, jungsung, jongsung } = decomposeHangul(syllable);

            // 특수 발음 규칙 확인
            const specialPronunciation = this.handleSpecialHiraganaPronunciation(chosung, jungsung, jongsung);
            if (specialPronunciation) {
                result += specialPronunciation;
                continue;
            }

            // 초성+중성 결합
            let syllableResult = "";
            if (chosung === 'ㅇ') {
                // 초성이 'ㅇ'인 경우 중성만 변환
                const vowel = this.JUNGSUNG_TO_ROMAN[jungsung];
                syllableResult = this.ROMAJI_TO_HIRAGANA[vowel] || '';
            } else {
                // 초성+중성 결합하여 변환
                const cho = this.CHOSUNG_TO_ROMAN[chosung];
                const jung = this.JUNGSUNG_TO_ROMAN[jungsung];
                const combined = this.combineRomanSyllable(cho, jung);
                syllableResult = this.convertRomajiToHiragana(combined);
            }

            // 종성 추가
            if (jongsung) {
                const jong = this.JONGSUNG_TO_ROMAN[jongsung];
                if (jong) {
                    syllableResult += this.ROMAJI_TO_HIRAGANA[jong] || '';
                }
            }

            result += syllableResult;
        }

        return result;
    }

    static handleSpecialHiraganaPronunciation(chosung, jungsung, jongsung) {
        // 특수 발음 규칙
        if (chosung === 'ㄷ' && jungsung === 'ㅜ') {
            return 'どぅ';
        }
        if (chosung === 'ㅅ' && jungsung === 'ㅜ') {
            return 'す';
        }
        if (chosung === 'ㅊ' && jungsung === 'ㅓ' && jongsung === 'ㄹ') {
            return 'ちょる';
        }
        if (chosung === 'ㅇ' && jungsung === 'ㅓ' && jongsung === 'ㄴ') {
            return 'おん';
        }
        if (chosung === 'ㅅ' && jungsung === 'ㅣ' && jongsung === 'ㄹ') {
            return 'しる';
        }
        return null;
    }

    static convertRomajiToHiragana(romaji) {
        // 특수 결합 규칙
        const specialCombinations = {
            'gi': 'ぎ', 'gu': 'ぐ', 'go': 'ご', 'ga': 'が', 'ge': 'げ',
            'gya': 'ぎゃ', 'gyu': 'ぎゅ', 'gyo': 'ぎょ',
            'ki': 'き', 'ku': 'く', 'ko': 'こ', 'ka': 'か', 'ke': 'け',
            'kya': 'きゃ', 'kyu': 'きゅ', 'kyo': 'きょ',
            'shi': 'し', 'su': 'す', 'so': 'そ', 'sa': 'さ', 'se': 'せ',
            'sha': 'しゃ', 'shu': 'しゅ', 'sho': 'しょ',
            'ji': 'じ', 'ju': 'じゅ', 'jo': 'じょ', 'ja': 'じゃ', 'je': 'じぇ',
            'chi': 'ち', 'chu': 'ちゅ', 'cho': 'ちょ', 'cha': 'ちゃ', 'che': 'ちぇ',
            'ni': 'に', 'nu': 'ぬ', 'no': 'の', 'na': 'な', 'ne': 'ね',
            'nya': 'にゃ', 'nyu': 'にゅ', 'nyo': 'にょ',
            'hi': 'ひ', 'hu': 'ふ', 'ho': 'ほ', 'ha': 'は', 'he': 'へ',
            'hya': 'ひゃ', 'hyu': 'ひゅ', 'hyo': 'ひょ',
            'mi': 'み', 'mu': 'む', 'mo': 'も', 'ma': 'ま', 'me': 'め',
            'mya': 'みゃ', 'myu': 'みゅ', 'myo': 'みょ',
            'rya': 'りゃ', 'ryu': 'りゅ', 'ryo': 'りょ',
            'sha': 'しゃ', 'shu': 'しゅ', 'sho': 'しょ',
            'cha': 'ちゃ', 'che': 'ちぇ',
            'yeo': 'よ', 'ye': 'いぇ',
            'wae': 'わえ', 'weo': 'わお',
            'kye': 'きぇ', 'gye': 'ぎぇ',
            'nye': 'にぇ', 'hye': 'ひぇ',
            'bye': 'びぇ', 'pye': 'ぴぇ',
            'mye': 'みぇ', 'rye': 'りぇ',
            'n': 'ん', 'm': 'む', 'ng': 'ん',
            'k': 'く', 't': 'と', 'p': 'ぷ',
            'r': 'る', 'l': 'る', 's': 'す',
            'ch': '', 'j': '', 'h': '',
            'che': 'ちぇ', 'chye': 'ちぇ', 'chwei': 'ちい',
            'yel': 'いぇる', 'yeol': 'いおる'
        };

        if (specialCombinations[romaji]) {
            return specialCombinations[romaji];
        }

        return this.ROMAJI_TO_HIRAGANA[romaji] || romaji;
    }

    static convertKatakanaToHiragana(katakana) {
        let hiragana = "";
        for (let i = 0; i < katakana.length; i++) {
            const charCode = katakana.charCodeAt(i);
            if (charCode >= 0x30A1 && charCode <= 0x30F6) { // Katakana range
                hiragana += String.fromCharCode(charCode - 0x0060);
            } else {
                hiragana += katakana[i]; // Keep non-Katakana characters as is
            }
        }
        return hiragana;
    }

    static convertToRomaji(japanese) {
        let romaji = japanese;
        
        // Replace long vowels
        romaji = romaji.replace(/ー/g, '');
        
        // Convert basic characters
        const romajiMap = {
            'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
            'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
            'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
            'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
            'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
            'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
            'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
            'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
            'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
            'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
            'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
            'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
            'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
            'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
            'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
            'ャ': 'ya', 'ュ': 'yu', 'ョ': 'yo',
            'ッ': '',  // Small tsu is handled separately
            
            // Hiragana characters
            'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
            'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
            'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
            'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
            'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
            'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
            'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
            'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
            'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
            'わ': 'wa', 'を': 'wo', 'ん': 'n',
            'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
            'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
            'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
            'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
            'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
            'ゃ': 'ya', 'ゅ': 'yu', 'ょ': 'yo',
            'っ': ''  // Small tsu is handled separately
        };
        
        // Convert each character
        romaji = romaji.split('').map(char => romajiMap[char] || char).join('');
        
        // Capitalize first letter
        return romaji.charAt(0).toUpperCase() + romaji.slice(1);
    }

    // 일본어 문자 유효성 검사
    static isValidJapanese(text) {
        // 가타카나, 히라가나, 중점(・) 만 허용
        return /^[ァ-ヶー・]+$/.test(text);
    }
}

// Korean to Japanese name conversion rules
const nameConversionRules = {
    // ... existing code ...
};

// Katakana to Hiragana conversion map
const katakanaToHiragana = {
    'ア': 'あ', 'イ': 'い', 'ウ': 'う', 'エ': 'え', 'オ': 'お',
    'カ': 'か', 'キ': 'き', 'ク': 'く', 'ケ': 'け', 'コ': 'こ',
    'サ': 'さ', 'シ': 'し', 'ス': 'す', 'セ': 'せ', 'ソ': 'そ',
    'タ': 'た', 'チ': 'ち', 'ツ': 'つ', 'テ': 'て', 'ト': 'と',
    'ナ': 'な', 'ニ': 'に', 'ヌ': 'ぬ', 'ネ': 'ね', 'ノ': 'の',
    'ハ': 'は', 'ヒ': 'ひ', 'フ': 'ふ', 'ヘ': 'へ', 'ホ': 'ほ',
    'マ': 'ま', 'ミ': 'み', 'ム': 'む', 'メ': 'め', 'モ': 'も',
    'ヤ': 'や', 'ユ': 'ゆ', 'ヨ': 'よ',
    'ラ': 'ら', 'リ': 'り', 'ル': 'る', 'レ': 'れ', 'ロ': 'ろ',
    'ワ': 'わ', 'ヲ': 'を', 'ン': 'ん',
    'ガ': 'が', 'ギ': 'ぎ', 'グ': 'ぐ', 'ゲ': 'げ', 'ゴ': 'ご',
    'ザ': 'ざ', 'ジ': 'じ', 'ズ': 'ず', 'ゼ': 'ぜ', 'ゾ': 'ぞ',
    'ダ': 'だ', 'ヂ': 'ぢ', 'ヅ': 'づ', 'デ': 'で', 'ド': 'ど',
    'バ': 'ば', 'ビ': 'び', 'ブ': 'ぶ', 'ベ': 'べ', 'ボ': 'ぼ',
    'パ': 'ぱ', 'ピ': 'ぴ', 'プ': 'ぷ', 'ペ': 'ぺ', 'ポ': 'ぽ',
    'ャ': 'ゃ', 'ュ': 'ゅ', 'ョ': 'ょ',
    'ッ': 'っ', 'ー': 'ー'
};

// Convert Korean name to Katakana
function convertToKatakana(familyName, givenName) {
    const convertedFamilyName = convertNamePart(familyName);
    const convertedGivenName = convertNamePart(givenName);
    
    const katakana = `${convertedFamilyName}　${convertedGivenName}`;
    const romaji = convertToRomaji(katakana);
    
    return { japanese: katakana, romaji: romaji };
}

// Convert Korean name to Hiragana
function convertToHiragana(familyName, givenName) {
    const katakanaResult = convertToKatakana(familyName, givenName);
    const hiragana = convertKatakanaToHiragana(katakanaResult.japanese);
    
    return { japanese: hiragana, romaji: katakanaResult.romaji };
}

// Helper function to convert Katakana to Hiragana
function convertKatakanaToHiragana(katakana) {
    return [...katakana].map(char => katakanaToHiragana[char] || char).join('');
}

// 가타카나를 VOCALOID IPA로 변환합니다.
function convertToIPA(katakana) {
    let ipa = '';
    let i = 0;
    
    while (i < katakana.length) {
        // 복합음 처리 (예: キャ, シャ 등)
        if (i + 1 < katakana.length && 'ャュョ'.includes(katakana[i + 1])) {
            const combination = katakana[i] + katakana[i + 1];
            if (VOCALOID_IPA_MAP[combination]) {
                ipa += VOCALOID_IPA_MAP[combination];
                i += 2;
                continue;
            }
        }
        
        // 촉음(っ/ッ) 처리
        if (katakana[i] === 'ッ') {
            if (i + 1 < katakana.length) {
                const nextChar = katakana[i + 1];
                const nextIPA = VOCALOID_IPA_MAP[nextChar];
                if (nextIPA && nextIPA.length > 0) {
                    // VOCALOID 표기법에서는 Q로 표시
                    ipa += 'Q';
                }
            }
            i++;
            continue;
        }
        
        // 일반 문자 처리
        const ipaChar = VOCALOID_IPA_MAP[katakana[i]] || katakana[i];
        ipa += ipaChar;
        i++;
    }
    
    return `[${ipa}]`;
} 