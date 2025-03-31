const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const app = express();

// Configuración de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('layout', 'layouts/layout');

// Middlewares
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'src', 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Rutas
const routes = require('./src/routes/home');
app.use('/', routes);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
