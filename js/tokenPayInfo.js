  //결제 버튼
  document.getElementById('pay-button').addEventListener('click', function () {
    const card = document.getElementById('card').value;
    const amount = document.getElementById('amount').value;

    if (amount) {
      alert(`카드: ${card}\n금액: ${amount}원\n결제를 진행합니다.`);
    } else {
      alert('금액을 입력해주세요.');
    }
  });

  //카드 토큰 슬라이드 뷰
  document.addEventListener('DOMContentLoaded', () => {
    const cardSlider = document.getElementById('card-slider');
    const cardSlides = document.querySelectorAll('.card-slide');
    const cardInput = document.getElementById('card');
    const visibleSlides = 1; // 한 번에 보이는 슬라이드 개수
    let currentIndex = 0;

    // 슬라이드 초기 숨김 처리
    updateSlidesVisibility();

    //슬라이드 시 현재 엘리먼트 클릭 이벤트 사용 안함
    // cardSlides.forEach(slide => {
    //   slide.addEventListener('click', () => {
    //     cardSlides.forEach(s => s.classList.remove('selected')); // 선택 효과 제거
    //     slide.classList.add('selected'); // 선택 효과 추가
    //
    //     const cardValue = slide.getAttribute('data-value');
    //     console.log('cardValue', cardValue);
    //     cardInput.value = cardValue;
    //   });
    // });
    //슬라이드 시 현재 엘리먼트 클릭 이벤트 -> 슬라이드 시, 현재 엘리먼트 인식 처리로 변경
  function updateSlidesVisibility() {
    cardSlides.forEach((slide, index) => {
      if (index >= currentIndex && index < currentIndex + visibleSlides) {
        slide.style.display = 'inline-block';
        //슬레이드 상의 보이는 엘리먼트에 이벤트 추가한다
        const cardValue = slide.getAttribute('data-value');
        console.log('현재 슬라이드 엘리먼트 값: ', cardValue);
        cardInput.value = cardValue;
      } else {
        slide.style.display = 'none';
        slide.classList.remove('selected');
      }
    });
  }

  // 왼쪽으로 슬라이드
  function slideLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidesVisibility();
    }
  }

  // 오른쪽으로 슬라이드
  function slideRight() {
    if (currentIndex < cardSlides.length - visibleSlides) {
      currentIndex++;
      updateSlidesVisibility();
    }
  }

  document.getElementById('slide-left-btn').addEventListener('click', slideLeft);
  document.getElementById('slide-right-btn').addEventListener('click', slideRight);

  // 슬라이드 버튼 추가
  // const leftButton = document.createElement('button');
  // leftButton.textContent = '<';
  // leftButton.addEventListener('click', slideLeft);
  // cardSlider.parentElement.insertBefore(leftButton, cardSlider);
  //
  // const rightButton = document.createElement('button');
  // rightButton.textContent = '>';
  // rightButton.addEventListener('click', slideRight);
  // cardSlider.parentElement.appendChild(rightButton);

});

// document.addEventListener('DOMContentLoaded', () => {
//   const cardSlides = document.querySelectorAll('.card-slide');
//   const cardInput = document.getElementById('card');
//
//   cardSlides.forEach(slide => {
//     slide.addEventListener('click', () => {
//       cardSlides.forEach(s => s.classList.remove('selected')); // 선택 효과 제거
//       slide.classList.add('selected'); // 선택 효과 추가
//
//       const cardValue = slide.getAttribute('data-value');
//       cardInput.value = cardValue;
//     });
//   });
// });
