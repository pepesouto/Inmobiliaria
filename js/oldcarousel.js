// $(document).ready(function(){

  var container = document.getElementById('row');
  

  fetch("http://localhost:3000/postImages")
  .then(function(response) {
    return response.json();

  })
  .then(function(myJson) {
    var itr = 1;
    myJson.forEach(function(element) {
      var img = document.createElement('img');
      var theDiv = document.createElement('div');
      $(theDiv).addClass("columnCarousel");
      $(img).addClass("demo cursor")
      $(theDiv).prepend(img);
      img.src = element.images;
      // img.style ="width:100%";
      img.onclick = "currentSlide(" + itr + ")"; //por algun motivo no le da la propiedad onclick a la img
      container.appendChild(theDiv);
      console.log("currentSlide(" + itr + ")"); //funciona perfecto
      itr = itr +1;
    });
  
  });

// });

