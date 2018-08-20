

var container = document.getElementById('imgbox');

// fetch("http://localhost:3000/postImages")
// .then(function(response) {
//   return response.json();

// })



// .then(function(myJson) {
//   myJson.forEach(function(element) {
//     var img = document.createElement('img');
//     var divSlides = document.createElement('div');
//     var divText = document.createElement('div');

//     $(divSlides).addClass("Slides");
//     $(divSlides).attr('id', 'holasoyunid');
//     $(img).addClass("demo cursor");
//     $(divText).addClass("numbertext");

//     $(divSlides).prepend(divText);
//     $(divText).prepend(img);
//     img.src = element.images;
//     container.appendChild(divSlides);
//   });

  
fetch("http://localhost:3000/properties?id=5") //el id tiene q depender de cada propiedad
.then(function(response) {
  return response.json();

})

.then(function(myJson) {
  myJson.forEach(function(element) {
    element.images.forEach(function(element){
      var img = document.createElement('img');
      var divSlides = document.createElement('div');
      var divText = document.createElement('div');

      $(divSlides).addClass("Slides");
      $(divSlides).attr('id', 'holasoyunid');
      $(img).addClass("demo cursor");
      $(divText).addClass("numbertext");

      $(divSlides).prepend(divText);
      $(divText).prepend(img);
      img.src = element;
      container.appendChild(divSlides);
    });
  });

});
