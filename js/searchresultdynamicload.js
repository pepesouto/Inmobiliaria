
$(document).ready(function(){

  console.log("hola estoy imprimiendo cosas");
  $("#buscar").click(function(){
    console.log("hola estoy imprimiendo cosas");

    var operationId = document.getElementById("operationId");
    var typeId = document.getElementById("typeId");
    var zone = document.getElementById("zoneId");


    /*
    var container = document.getElementById('recommendedbox');
  	var docFrag = document.createDocumentFragment();*/

    fetch('http://localhost:3000/properties?zoneId=zone&type=typeId&operationType=operationId')
    .then(function(response) {
      console.log("holi");
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      console.log("hola estoy imprimiendo cosas");
      /*myJson.forEach(function(element) {
        var img = document.createElement('img');
        var theDiv = document.createElement('div');
        $(theDiv).addClass("recommendedproperty");
        $(theDiv).prepend(img);
        img.src = element.images[0];
        docFrag.appendChild(theDiv);*/
    });
  });


});
