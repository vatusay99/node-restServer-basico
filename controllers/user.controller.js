const { response, request } = require('express');

const usuariosGet = (req=request, res= response)=>{

	const params = req.query;
	
	res.status(200).json({
		ok: true,
		msg: "Api Get",
		params
	})
}

const createUsuario = (req, res= response)=>{

	const body = req.body;

	res.status(201).json({
		ok: true,
		msg: "Api post",
		body
	});
	
}

const putUser = (req, res= response ) =>{

	const id = req.params.id;
	
	res.status(203).json({
		ok: true,
		msg: "Api put",
		id
	});
	
}

const editarUsuario = (req, res= response )=>{

	res.status(204).json({
		ok: true,
		msg: "Api pach",
	});
	
}

const deleteUsuario = (req, res= response)=>{
	
	res.status(202).json({
		ok: true,
		msg: "Api delete",
	});
}




module.exports={
	usuariosGet,
	createUsuario,
	deleteUsuario,
	editarUsuario,
	putUser
}