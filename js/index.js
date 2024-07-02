/// <reference types="../@types/jquery" />;
// Open Bar
$("#open").on("click", function () {
  $("#sideBar").animate({ width: "270px", opacity: "1" }, 500);
  $("#open").animate({ marginLeft: "270px" }, 500);
});
// Close Bar
$("#close").on("click", function () {
  $("#sideBar").animate({ width: "0px", opacity: "0" }, 500);
  $("#open").animate({ marginLeft: "0px" }, 500);
});
// Smooth Body
$("#sideBar a").on("click", function (e) {
  let secId = $(e.target).attr("href");
  let offset = $(secId).offset().top;
  $("html,body").animate({ scrollTop: offset }, 2000);
});
// Details-Slider
$("#Details article").eq(0).css({ display: "block" });
let x = $("#Details h3").eq(0).html();
$("#Details h3").on("click", function (e) {
  if (x === $(e.target).html()) {
    $(e.target).next("article").slideToggle(500);
  } else {
    x = $(e.target).html();
    $("#Details article").slideUp(500);
    $(e.target).next("article").slideDown(500);
  }
});
// Countdown
const countDownDate = new Date("sep 16, 2029 00:00:00").getTime();
// Update counter every 1 second
const count = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  // Time calculations
  const days = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;
  // Show Data
  $("#Duration p")
    .eq(0)
    .html(days + " D");
  $("#Duration p")
    .eq(1)
    .html(hours + " h");
  $("#Duration p")
    .eq(2)
    .html(minutes + " m");
  $("#Duration p")
    .eq(3)
    .html(seconds + " s");
  // If the count down is finished, write some text
  if (distance < 0) {
    $("#Duration p").html("EXPIRED");
    clearInterval(count);
  }
}, 1000);
// Character Counter
$("#Message").on("input", function (e) {
  let num = 100 - e.target.value.length;
  if (num >= 0) {
    $(".count").html(num);
  } else {
    $(".count").html("0");
    e.target.value = e.target.value.substring(0, 100);
    $("#Message").html(e.target.value);
  }
});
