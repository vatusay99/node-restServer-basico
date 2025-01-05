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

router.post('/', createUsuario);

router.delete('/', deleteUsuario);

router.pach('/', editarUsuario);



module.exports = router;
