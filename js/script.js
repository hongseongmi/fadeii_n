$(document).ready(function () {
  // 배너스와이퍼 용
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOninteraction: false,
    },
  });

  //sec-1 data-alt 연결하기
  $(".main-menu li").click(function () {
    // 클릭하는 li에 미리 액티브 걸려있던 거 지워주고 다시 추가해주기
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    const result = $(this).attr("data-alt");
    // data-alt 적어놓기만 했던 애들한테 data-alt 속성값 부여해줌

    $(".menu-box div").removeClass("active");
    //내용을 가진 부분임.
    //각각 지워주기엔 식이 너무 길어지니까 공통된 태그중 하나인 div로 묶어줌
    $(`#${result}`).addClass("active");
    //변수 result에 해당되는 애들한테 액티브 추가
  });

  // sec-1 메뉴버튼 클릭했을때 색상(active) 추가해주기
  $(".main-menu li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  // hamburger active 추가 해주기
  $('.hamburger').click(function(){
    $('.header-area .hamburger-bg').toggleClass('active');
    $('.hamburger span').toggleClass('active')
  });

  // sec-3 스와이퍼용
  var swiper = new Swiper(".sec-Swiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    autoplay: {
      loop: true,
      disableOnInteraction: false,
      delay: 3500,
    },
  });

  $(window).scroll(function () {
    const sct = $(window).scrollTop();
    console.log(sct);
  });

  // sec-4 동그라미 객체 스크롤에 맞게 굴리기
  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    let image = document.getElementById("svg");
    image.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
    // pageYOffset값에서 적게 나눠줄수록 빨리 돌아가유 성미씌
  }
  // aos 구동시키는 함수
  AOS.init();
}); //end
