// 스크롤 이벤트를 감지하여 헤더 스타일을 변경하는 스크립트

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0; // 마지막 스크롤 위치 저장 변수
    const scrollThreshold = 5; // 스크롤 감지 임계값 (매우 작게 설정)
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // 스크롤 방향 감지 (아래로 스크롤 = 헤더 숨김, 위로 스크롤 = 헤더 표시)
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // 아래로 스크롤 중이고, 임계값 이상 스크롤됨
            header.classList.add('hide'); // 헤더 숨김
        } else if (scrollTop < lastScrollTop) {
            // 위로 스크롤 중
            header.classList.remove('hide'); // 헤더 표시
        }
        
        // 스크롤 위치에 따라 배경 스타일 변경 (기존 기능 유지)
        if (scrollTop > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('hide'); // 페이지 최상단에서는 항상 헤더 표시
        }
        
        // 현재 스크롤 위치 저장
        lastScrollTop = scrollTop;
    });
    
    // 페이지 로드 시 초기 스크롤 위치에 따라 클래스 설정
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    }
});
