const Libro = require('../model/libros');

const librosService = {
  obtenerTodosLosLibros: async () => {
    try {
      return await Libro.findAll();
    } catch (error) {
      throw new Error('Error al obtener todos los libros: ' + error.message);
    }
  },

  obtenerLibroPorId: async (id) => {
    try {
      const libro = await Libro.findByPk(id);
      if (!libro) throw new Error('Libro no encontrado');
      return libro;
    } catch (error) {
      throw new Error('Error al obtener el libro por ID: ' + error.message);
    }
  },

  crearLibro: async (libro) => {
    try {
      if (!libro.titulo || !libro.autor) {
        throw new Error('Título y autor son campos obligatorios.');
      }
      return await Libro.create(libro);
    } catch (error) {
      throw new Error('Error al crear el libro: ' + error.message);
    }
  },

  actualizarLibro: async (id, libro) => {
    try {
      if (!libro.titulo || !libro.autor) {
        throw new Error('Título y autor son campos obligatorios.');
      }
      const [updated] = await Libro.update(libro, { where: { id } });
      if (updated === 0) throw new Error('No se encontró el libro para actualizar');
      return updated;
    } catch (error) {
      throw new Error('Error al actualizar el libro: ' + error.message);
    }
  },

  eliminarLibro: async (id) => {
    try {
      const deleted = await Libro.destroy({ where: { id } });
      if (deleted === 0) throw new Error('No se encontró el libro para eliminar');
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar el libro: ' + error.message);
    }
  },
};

module.exports = librosService;
