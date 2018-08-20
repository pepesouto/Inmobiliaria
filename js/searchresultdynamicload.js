
$(document).ready(function(){


    var urlParams = new URLSearchParams(window.location.search);

    var operationId = urlParams.get('operationType');
    var zone = urlParams.get('zoneId');
    var typeId = urlParams.get('propertyType');


    var url = new URL("http://localhost:3000/properties"),
    params = {"zoneId": zone, "operationType":operationId, "propertyType": typeId};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      var container = document.getElementById('resultbox');
      myJson.forEach(function(element) {
        var img = document.createElement('img');
        var theDiv = document.createElement('div');
        var divDescription = document.createElement('div');


        var aux = document.createElement('a');
        var link = "post.html?id=" + element.id;
        $(aux).attr("href", link);

        $(aux).addClass("type");
        $(aux).html(element.name);


        var descrProp = document.createElement('h2');
        $(descrProp).addClass("title");
        $(descrProp).html(element.address);
        var descrtext = document.createElement('p');
        $(descrtext).addClass("text");
        $(descrtext).html(element.details[0].size);

        $(divDescription).append(descrProp);
        $(divDescription).append(descrtext);
        $(divDescription).prepend(aux);

        var theSect = document.createElement('section');
        $(divDescription).addClass("description");
        $(theSect).addClass("result");
        $(theDiv).addClass("imgbox");
        $(theSect).prepend(divDescription);
        $(theSect).prepend(theDiv);
        $(theDiv).prepend(img);
        img.src = element.images[0];
        container.appendChild(theSect);


        var map = document.getElementById("map");
        if(map){
          var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(element.place.lat, element.place.lng),
            scrollwheel: false
          }
          new google.maps.Map(map, mapOptions);
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(element.place.lat, element.place.lng),
            map: map
          });
          marker.setMap(map);
        }
      });
    })

});
