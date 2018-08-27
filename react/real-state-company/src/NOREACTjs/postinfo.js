// DYNAMIC LOAD

$(document).ready(function(){

  var urlParams = new URLSearchParams(window.location.search);

  var id = urlParams.get('id');

  var url = new URL("http://localhost:3000/properties"),
  param = {"id": id };
  Object.keys(param).forEach(key => url.searchParams.append(key, param[key]))

  fetch(url) //el id tiene q depender de cada propiedad
  .then(function(response) {
    return response.json();

  })

  .then(function(myJson) {
    myJson.forEach(function(element) {
      $("#ownerName").html(element.owner[0].name);
      $("#ownerPhone").html(element.owner[0].phone);
      $("#id").html(element.id);
      $("#postTitle").html(element.name);
      $(".zoneId").html(element.zoneId);
      $("#address").html(element.address);
      $("#bathroom").html(element.bathroom);
      $("#petFriendly").html(element.petFriendly);
      $("#operationType").html(element.operationType);
      $("#propertyType").html(element.propertyType);
      $("#size").html(element.details[0].size);
      $("#garage").html(element.garage);
      $("#light").html(element.light);
      $("#AC").html(element.AC);
      $("#bedroom").html(element.bedroom);

      $("#description").html(element.description);
      element.amenities[0].forEach(function(element){
        var container1 = document.getElementById('column1');
        var theLi = document.createElement('li');
        $(theLi).html(element);
        container1.appendChild(theLi);
      });
      element.amenities[1].forEach(function(element){
        var container1 = document.getElementById('column2');
        var theLi = document.createElement('li');
        $(theLi).html(element);
        container1.appendChild(theLi);
      });

    });
  });
  });
