$(document).ready(function(){

  var container = document.getElementById('resultbox');


  fetch('http://localhost:3000/properties')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.forEach(function(element) {
      var img = document.createElement('img');
      var theSection = document.createElement('section');
      var theDivImg = document.createElement('div');
      // var theDivDes = document.createElement('div');

      
      $(theSection).addClass("result");
      $(theDivImg).addClass("imgbox");
      // $(theSection).addClass("description");

      $(theSection).prepend(theDivImg);
      $(theDivImg).prepend(img);
      // $(theSection).prepend(theDivDes);

      img.src = element.images[1];
      container.appendChild(theSection);
      // docFrag.appendChild(theDivImg);
      // docFrag.appendChild(theDivDes);
    });


  });

  

});
