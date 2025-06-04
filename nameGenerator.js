// DOM 요소
const familyNameInput = document.getElementById('familyName');
const givenNameInput = document.getElementById('givenName');
const convertBtn = document.getElementById('convertBtn');
const resultDisplay = document.querySelector('.result-display');

// 입력 유효성 검사
function validateInput() {
    const familyName = familyNameInput.value.trim();
    const givenName = givenNameInput.value.trim();
    
    const isValid = familyName.length > 0 && givenName.length > 0 && 
                   /^[가-힣]+$/.test(familyName) && /^[가-힣]+$/.test(givenName);
    
    convertBtn.disabled = !isValid;
}

// 결과 표시 (대폭 수정)
function displayResult(katakanaFamily, katakanaGiven, hiraganaFamily, hiraganaGiven) {
    const resultDiv = document.querySelector('.result');
    if (!resultDiv) return;

    // 이전 에러 메시지 제거
    const errorDiv = document.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }

    // 결과 표시 영역 초기화
    resultDiv.innerHTML = '';

    // --- 히라가나 섹션 생성 --- 
    const hiraganaBlock = document.createElement('div');
    hiraganaBlock.className = 'result-block';

    const hiraganaHeader = document.createElement('h3');
    hiraganaHeader.textContent = '히라가나:';
    hiraganaBlock.appendChild(hiraganaHeader);

    const hiraganaText = document.createElement('p');
    hiraganaText.className = 'japanese-text';
    hiraganaText.textContent = `${hiraganaFamily}・${hiraganaGiven}`;
    hiraganaBlock.appendChild(hiraganaText);

    const hiraganaCopyButtons = document.createElement('div');
    hiraganaCopyButtons.className = 'copy-buttons';
    hiraganaCopyButtons.appendChild(createCopyButton(hiraganaFamily, '성'));
    hiraganaCopyButtons.appendChild(createCopyButton(hiraganaGiven, '이름'));
    hiraganaBlock.appendChild(hiraganaCopyButtons);

    resultDiv.appendChild(hiraganaBlock);

    // --- 가타카나 섹션 생성 --- 
    const katakanaBlock = document.createElement('div');
    katakanaBlock.className = 'result-block';

    const katakanaHeader = document.createElement('h3');
    katakanaHeader.textContent = '가타카나:';
    katakanaBlock.appendChild(katakanaHeader);

    const katakanaText = document.createElement('p');
    katakanaText.className = 'japanese-text';
    katakanaText.textContent = `${katakanaFamily}・${katakanaGiven}`;
    katakanaBlock.appendChild(katakanaText);

    const katakanaCopyButtons = document.createElement('div');
    katakanaCopyButtons.className = 'copy-buttons';
    katakanaCopyButtons.appendChild(createCopyButton(katakanaFamily, '성'));
    katakanaCopyButtons.appendChild(createCopyButton(katakanaGiven, '이름'));
    katakanaBlock.appendChild(katakanaCopyButtons);

    resultDiv.appendChild(katakanaBlock);
}

function displayError(message) {
    const resultDiv = document.querySelector('.result');
    if (!resultDiv) return;

    // 이전 결과 제거
    resultDiv.innerHTML = '';

    // 에러 메시지 표시
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff0000';
    errorDiv.style.fontWeight = 'bold';
    errorDiv.style.marginTop = '20px';
    errorDiv.textContent = message;
    resultDiv.appendChild(errorDiv);
}

// 복사 버튼 생성 함수 (버튼 텍스트 생성 로직 수정)
function createCopyButton(text, type) {
    const button = document.createElement('button');
    button.className = 'copy-button';
    const buttonText = `${type} 복사하기`;
    button.innerHTML = `<i class="fas fa-copy"></i> ${buttonText}`;
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(text).then(() => {
            button.classList.add('copied');
            button.innerHTML = '<i class="fas fa-check"></i> 복사됨';
            setTimeout(() => {
                button.classList.remove('copied');
                button.innerHTML = `<i class="fas fa-copy"></i> ${buttonText}`;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('텍스트 복사에 실패했습니다.');
        });
    });
    return button;
}

// 변환 처리 (수정)
function handleConversion() {
    const familyName = familyNameInput.value.trim();
    const givenName = givenNameInput.value.trim();

    console.log('입력값:', { familyName, givenName });

    try {
        console.log('변환 시작...');
        // 1. 가타카나 결과 얻기
        const katakanaResult = NameConverter.convertName(familyName, givenName, false);
        const [katakanaFamily, katakanaGiven] = katakanaResult.japanese.split('・');
        console.log('가타카나 변환 결과:', katakanaResult);
        
        // 2. 히라가나 결과 얻기 (가타카나 결과 재활용)
        const hiraganaFamily = NameConverter.convertKatakanaToHiragana(katakanaFamily);
        const hiraganaGiven = NameConverter.convertKatakanaToHiragana(katakanaGiven);
        console.log('히라가나 변환 결과:', { hiraganaFamily, hiraganaGiven });
        
        // 3. 결과 표시 함수 호출 (인자 변경)
        displayResult(katakanaFamily, katakanaGiven, hiraganaFamily, hiraganaGiven);

    } catch (error) {
        console.error('변환 오류:', error);
        displayError(error.message || '변환 중 오류가 발생했습니다.');
    }
}

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    // 입력 필드 이벤트
    familyNameInput.addEventListener('input', validateInput);
    givenNameInput.addEventListener('input', validateInput);

    // 변환 버튼 이벤트 (하나의 버튼에 연결)
    convertBtn.addEventListener('click', handleConversion);

    // 초기 유효성 검사
    validateInput();
});