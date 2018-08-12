
var imagesArray = [ "img/destacados/1.png",
                    "img/destacados/2.png",
                    "img/destacados/3.png",
                    "img/destacados/4.png",
                    "img/destacados/5.png",
                    "img/destacados/6.png",
                    "img/destacados/7.jpg",
                    "img/destacados/8.jpg",
                    "img/destacados/9.png" ]

$(document).ready(function(){

  var container = document.getElementById('recommendedbox');
	var docFrag = document.createDocumentFragment();

  imagesArray.forEach(function(url, index, originalArray) {
      var img = document.createElement('img');
      // $(img).addClass("");
      var theDiv = document.createElement('div');
      $(theDiv).addClass("recommendedproperty");
      $(theDiv).prepend(img);
      img.src = url;
      docFrag.appendChild(theDiv);
  });

  container.appendChild(docFrag);

});
