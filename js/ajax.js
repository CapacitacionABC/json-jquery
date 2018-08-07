(function(){

	$.ajax({
		type: 'GET',
		url: 'https://next.json-generator.com/api/json/get/Vk397MQSS',
		dataType: 'json',
	})

	.done(function( data ){

		var person = data;

		$("#picFoto").attr( "src", data.picture );
		$("#txtNombre").val( data.name );
		$("#txtDireccion").val( data.address );
		$("#txtGenero").val( data.gender );
		$("#txtTelefono").val( data.phone );
		
		console.log("Hecho correcto!" + data.name);
	})

	.fail(function(){
		console.log("Fallo");
		
	})
	.always(function(){
		console.log("Completo la operacion");
		
	})






})();