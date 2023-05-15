// script.js

// 페이지 로딩 후 실행되는 코드
document.addEventListener('DOMContentLoaded', function() {
  // 네비게이션 링크들 가져오기
  const navLinks = document.querySelectorAll('nav ul li a');

  // 각 링크에 클릭 이벤트 추가
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // 기본 동작 방지

      const targetId = link.getAttribute('href'); // 클릭된 링크의 href 속성 값 가져오기
      const targetSection = document.querySelector(targetId); // 해당 섹션 요소 찾기

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // 섹션으로 스크롤
      }
    });
  });
});
