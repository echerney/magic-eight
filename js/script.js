$(function () {
  console.log("linked")

  $('#shake').click(function(){
    $('#ball').removeClass();
    setTimeout(shakeTheBall, 10);
  });

  $('#flip').click(function(){
    setTimeout(flipTheBall, 10);
  })

function shakeTheBall() {
  $('#ball').addClass("animated shake");
}

function flipTheBall() {
  $('#ball').addClass("animated rotateOut")
}

});
