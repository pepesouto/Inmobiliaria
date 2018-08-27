$(document).ready(function(){

  var container = document.getElementById('recommendedbox');
  var docFrag = document.createDocumentFragment();

  fetch('http://localhost:3000/properties?isHighlight=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.forEach(function(element) {
      var img = document.createElement('img');
      var theDiv = document.createElement('div');
      $(theDiv).addClass("recommendedproperty");

      var aux = document.createElement('a');
      var link = "post.html?id=" + element.id;
      $(aux).attr("href", link);
      $(aux).append(img);
      $(theDiv).prepend(aux);
      
      img.src = element.images[0];
      docFrag.appendChild(theDiv);
  });

  container.appendChild(docFrag);
  });

});
