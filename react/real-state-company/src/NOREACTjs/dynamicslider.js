// DYNAMIC LOAD

$(document).ready(function(){

var container = document.getElementById('sliderImg');

var urlParams = new URLSearchParams(window.location.search);

var id = urlParams.get('id');

var url = new URL("http://localhost:3000/properties"),
param = {"id": id };
Object.keys(param).forEach(key => url.searchParams.append(key, param[key]))

fetch(url)
.then(function(response) {
  return response.json();

})

.then(function(myJson) {
  myJson.forEach(function(element) {
    element.images.forEach(function(element){
      var img = document.createElement('img');
      var theLi = document.createElement('li');

      $(theLi).prepend(img);
      img.src = element;
      container.appendChild(theLi);

    });
  });

});

});
// DYNAMIC LOAD

// THIS MAKES SLIDES WORK

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	// $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

// THIS MAKES SLIDES WORK
