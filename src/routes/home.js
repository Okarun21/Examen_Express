const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros.controller');

// Otras rutas
router.get('/', librosController.listarLibros);
router.get('/libros/nuevo', librosController.mostrarFormularioCrear);
router.post('/libros', librosController.crearLibro);
router.get('/libros/:id/editar', librosController.mostrarFormularioEditar);
router.put('/libros/:id', librosController.actualizarLibro);
router.delete('/libros/:id/eliminar', librosController.eliminarLibro);

module.exports = router;
