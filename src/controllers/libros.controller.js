const librosService = require("../services/libros.services");

const librosController = {
  listarLibros: async (req, res) => {
    try {
      const libros = await librosService.obtenerTodosLosLibros();
      res.render("pages/listaLibros", { libros, title: "Lista de Libros" });
    } catch (error) {
      res.render("pages/404Error", {
        error: "Error al obtener los libros.",
        title: "Error",
      });
    }
  },

  mostrarFormularioCrear: (req, res) => {
    res.render("pages/formularioLibro", { libro: null, title: "Agregar Libro" });
  },

  crearLibro: async (req, res) => {
    const { titulo, autor, año_publicacion, genero } = req.body;
    try {
      await librosService.crearLibro({ titulo, autor, año_publicacion, genero });
      res.redirect("/");
    } catch (error) {
      res.render("pages/formularioLibro", {
        error: error.message,
        libro: req.body,
        title: "Agregar Libro",
      });
    }
  },

  mostrarFormularioEditar: async (req, res) => {
    try {
      const libro = await librosService.obtenerLibroPorId(req.params.id);
      res.render("pages/formularioLibro", { libro, title: "Editar Libro" });
    } catch (error) {
      res.render("pages/404Error", {
        error: error.message,
        title: "Error",
      });
    }
  },

  actualizarLibro: async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, año_publicacion, genero } = req.body;
    try {
      await librosService.actualizarLibro(id, { titulo, autor, año_publicacion, genero });
      res.redirect("/");
    } catch (error) {
      res.render("pages/formularioLibro", {
        error: error.message,
        libro: { id, titulo, autor, año_publicacion, genero },
        title: "Editar Libro",
      });
    }
  },

  eliminarLibro: async (req, res) => {
    try {
      await librosService.eliminarLibro(req.params.id);
      res.redirect("/");
    } catch (error) {
      res.render("pages/404Error", {
        error: error.message,
        title: "Error",
      });
    }
  },
};

module.exports = librosController;
