const express = require('express');
const cors = require('cors');
// require('dotenv').config();

class Server{

	constructor(){
		this.app = express();
		this.port = process.env.PORT;
		this.usuariosPath = '/api/usuarios';

		// middlewares
		this.middleware();

		this.routes();
	}

	middleware(){
		this.app.use(cors());
		//lectura y parseo del body
		this.app.use(express.json())
		this.app.use(express.static('public'));
	}

	routes(){
		this.app.use(this.usuariosPath, require('../routes/user'));
	}

	listen(){
		this.app.listen(this.port, function(){
			console.log(`server iniciado en http://localhost:${this.port}`);
		});
	}

}

module.exports = Server;