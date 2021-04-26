const { Router } = require('express');

const ProdutoControle = require('./controladores/ProdutoControle');

const rotas = new Router();

rotas.get('/produtos', ProdutoControle.index);

rotas.get('/produtos/:id', ProdutoControle.show);

rotas.post('/produtos', ProdutoControle.store);

rotas.put('/produtos/:id', ProdutoControle.update);

rotas.delete('/produtos/:id', ProdutoControle.destroy);

module.exports = rotas;
