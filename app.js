
// 메뉴 상단바 조정
const nav_icon = document.querySelector('.nav_icon');
const nav_menu = document.querySelector('.nav_menu');

nav_icon.addEventListener('click', ()=>{
    nav_menu.classList.toggle('active');
});


//이미지맵 태그 제이쿼리
$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
});


//이미지 클릭시 스크롤 이동
function scrollToTarget() {
    var target = document.getElementById("lotte"); // 목표 위치의 요소를 가져옵니다
    target.scrollIntoView({ behavior: 'smooth' }); // 부드럽게 스크롤합니다
}

document.querySelectorAll('area').forEach(function(area) {
    area.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 링크 동작을 막습니다.
        const targetDiv = document.querySelector(this.getAttribute('href'));
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
    });
});