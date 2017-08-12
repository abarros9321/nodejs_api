#API rest de notas
APlicacion para crear notas 

## Metodos Http permitidos

|-Metodo---|-----------Description------------------|
_____________________________________________________
|-'GET'----|-Obtener un recurso o lista de recursos-|
_____________________________________________________
|-'POST'---|-Crear un recurso-----------------------|
_____________________________________________________
|-'PUT'----|-Actualizar un recurso------------------|
_____________________________________________________
|-'Delete'-|-Eliminar un recurso--------------------|

## Codigos de Respuesta

|-Codigo---|---------------------------Description---------------------------------|
____________________________________________________________________________________
|-'200'----|-Success---------------------------------------------------------------|
____________________________________________________________________________________
|-'201'----|-Success - Created-----------------------------------------------------|
____________________________________________________________________________________
|-'204'----|-Success - No Content--------------------------------------------------|
____________________________________________________________________________________
|-'400'----|-Bad Request-----------------------------------------------------------|
____________________________________________________________________________________
|-'401'----|-Unauthorized----------------------------------------------------------|
____________________________________________________________________________________
|-'404'----|-Not Found-------------------------------------------------------------|
____________________________________________________________________________________
|-'422'----|-Unprocessable Entity -imposible seguirla debido a errores semánticos.-|
____________________________________________________________________________________
|-'429'----|-Too Many Requests-----------------------------------------------------|
____________________________________________________________________________________
|-'500'----|-Internal Server Error-------------------------------------------------|
____________________________________________________________________________________
|-'503'----|-Service Unavailable---------------------------------------------------|

#Metodos

##Crear una nota nueva [POST]

Solicitud [POST] /notas
	{
		nota:{
		"title": "mi primera nota",
		"description": "esta sera mi primera nota",
		"type":"js",
		"body":"mira mi primera nota"
		}
	}
Respuesta
	{
		nota:{
		"id":123,
		"title": "mi primera nota",
		"description": "esta sera mi primera nota",
		"type":"js",
		"body":"mira mi primera nota"
		}
	}

## Obtener una nota [GET]
	Solicitud GET /notas/123

	Respuesta
	{
		nota:{
		"id":123,
		"title": "mi primera nota",
		"description": "esta sera mi primera nota",
		"type":"js",
		"body":"mira mi primera nota"
		}
	}

## Obtener todas las notas [GET]
	Solicitud GET /notas/

	Respuesta
	[
		nota:{
		"id":123,
		"title": "mi primera nota",
		"description": "esta sera mi primera nota",
		"type":"js",
		"body":"mira mi primera nota"
		}
		
	]

## Actualizar nota
	Solicitud PUT /notas/123
	{
		nota:{
		"title": "mi primera nota",
		"description": "esta sera mi primera nota",
		"type":"ruby",
		"body":"mira mi primera nota"
		}
	}

	Respuesta
	{
		nota:{
		"id":123,
		"title": "mi primera nota",
		"description": "esta sera mi primera nota",
		"type":"ruby",
		"body":"mira mi primera nota"
		}
	}

## Eliminar nota
	Solicitud DELETE /notas/123
	 