// 스크롤 이벤트를 감지하여 헤더 스타일을 변경하는 스크립트

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', function() {
        // 스크롤 위치가 10px 이상이면 scrolled 클래스 추가, 아니면 제거
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 페이지 로드 시 초기 스크롤 위치에 따라 클래스 설정
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    }
});
