
function planetas(){

	fetch('https://swapi.dev/api/planets/')
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(myJson) {
	    console.log(myJson);
	  });

	  fetch('https://swapi.dev/api/planets/').then(function(response) {
	  if(response.ok) {
	    response.blob().then(function(miBlob) {
	      var objectURL = URL.createObjectURL(miBlob);
	      miImagen.src = objectURL;
	    });
	  } else {
	    console.log('Respuesta de red OK pero respuesta HTTP no OK');
	  }
	})
	.catch(function(error) {
	  console.log('Hubo un problema con la petición Fetch:' + error.message);
	});
}	
