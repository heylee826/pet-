//모바일 메뉴
$('.menu-bar').on('click', function () {
  $('.main-menu-01').css({
      'right': '0'
  })
});
$('.menu-close').on('click', function () {
  $('.main-menu-01').css({
      'right': '-100%'
  })
});




//채팅뱃지 스크롤하면 사라지게
const badgeEl = document.querySelector('.visual .chatt');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY < 300) {
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)