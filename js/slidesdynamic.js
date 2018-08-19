

var container = document.getElementById('imgbox');

fetch("http://localhost:3000/postImages")
.then(function(response) {
  return response.json();

})
.then(function(myJson) {
  var itr = 1;
  myJson.forEach(function(element) {
    var img = document.createElement('img');
    var divSlides = document.createElement('div');
    var divText = document.createElement('div');

    $(divSlides).addClass("Slides");
    $(img).addClass("demo cursor");
    $(divText).addClass("numbertext");

    $(divSlides).prepend(divText);
    $(divText).prepend(img);
    img.src = element.images;
    container.appendChild(divSlides);
  });

});
