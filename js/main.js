var navbar = document.getElementsByTagName("nav")[0];
var tabs = document.getElementsByClassName("tab");
var tabHeaders = document.querySelectorAll(".tab-header>p");
var tab_phim = document.getElementsByClassName("tab-phim");
var tab_header_phim = document.querySelectorAll("#sec-4>.tab-header-phim>p");
//Ham cua NavBar
document.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop >= 80) {
    navbar.className = "ani-navbar";
  } else navbar.className = "ani-navbar-default";
});
//Ham cua TicketTab
// giải thích: thêm 'envent' để lấy sự kiện(tham số đầu tiên của các hàm luôn ngầm định là EVENT)
function ShowTab(event, index) {
  for (i = 0; i < tabHeaders.length; i++) {
    tabHeaders[i].className = "";
  }
  event.target.className = "selected";
  // Hiển thị tab được chọn
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tabs[index].style.display = "block";
}
//tab-phim
function ShowTabPhim(e, ind) {
  for (i = 0; i < tab_header_phim.length; i++) {
    tab_header_phim[i].className = "";
  }
  e.target.className = "selected";
  // Hiển thị tab được chọn
  for (i = 0; i < tab_phim.length; i++) {
    tab_phim[i].style.display = "none";
  }
  tab_phim[ind].style.display = "block";
}

//slideshow
// thuộc tính children sẽ lấy tất cả con của th cha
var slider = document.getElementsByClassName("slider")[0];
var slideIndex = 1;
function showSlide(index) {
  if (index >= 4) {
    index = 1;
    slideIndex = 1;
  }
  for (i = 1; i < slider.children.length; i++) {
    slider.children[i].style.opacity = 0;
  }
  slider.children[index].style.opacity = 1;
  slideIndex++;
  setTimeout(function() {
    showSlide(slideIndex);
  }, 2500);
}
showSlide(slideIndex);
