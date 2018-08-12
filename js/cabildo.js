let zone = [
	{
		id: 1,
		name: 'Montevideo'
	}
];

const propertyType = {HOUSE:'Casa', APTO:'Apto', BUSINESS:'Negocio'};
const operationType = {SALE:'venta',  RENT:'renta'};
const detailsTypes = {SIZE: 'metraje'};

let property = [
	{
		id:1,
		name:'sss',
		images: [],
		zoneId: 1,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: [{"metraje" : '122mtr2'}, {luminosidad: "Luminoso"}, {modernidad:"Moderno"}],
		place: {lat:111, lng: 1111},
		address: 'Paraguay 2141',
		isHighlight: true
	}
];


$(document).ready( function(){

	$(".locationtext").text(zone[0].name);
	$(".id").text("Id: " + property[0].id);
	$(".zoneId").text("Zone Id: " + property[0].zoneId);
	$(".address").text("Address: " + property[0].address);
	$(".propertyType").text("Property Type: " + property[0].propertyType);
	/*$(".propertyType").capitalize();*/
	$(".operationType").text("Operation Type: " + property[0].operationType);

	$(".details").text(function(){
		ret = "";
		property[0].details.forEach(e => function(){
			ret = e.second() + ", " + ret;
		return ret;
		})
	});


	

});
