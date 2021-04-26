const { produto } = require('../models')

class ProdutoControle {

    async index(req, res) {
        try {
            const produtos = await produto.findAll();
            return res.json(produtos);
        } catch (err) {
            return res.status(400).json({error : err.message});
        }
    }

    async show(req, res) {
        try {
            const retorno = await produto.findByPk(req.params.id);
            return res.json(retorno);
        } catch (err) {
            return res.status(400).json({error : err.message});
        }
    }  
    
    async store(req, res) {
        try {
            console.log(req.body)
            const retorno = await produto.create(req.body);
            return res.json(retorno);
        } catch (err) {
            return res.status(400).json({error : err.message});
        }
    }   
    
    async update(req, res) {
        try {
            const retorno = await produto.findByPk(req.params.id);

            await retorno.update(req.body);
            return res.json(retorno);
        } catch (err) {
            return res.status(400).json({error : err.message});
        }
    }      

    async destroy(req, res) {
        try {
            const retorno = await produto.findByPk(req.params.id);

            await retorno.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({error : err.message});
        }
    }       
}

module.exports = new ProdutoControle();