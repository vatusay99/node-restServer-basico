const { Router } = require('express');
const { usuariosGet, 
				createUsuario, 
				deleteUsuario, 
				putUser, 
				editarUsuario 
			} = require('../controllers/user.controller');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', putUser);

router.post('/create', createUsuario);

router.delete('/delete', deleteUsuario);

router.patch('/edit', editarUsuario);



module.exports = router;
