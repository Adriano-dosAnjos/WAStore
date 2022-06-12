const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    
    codigo: Number,
    nome: String,
    desc: String,
    cor: String,
    valor: Number,
    foto: String,
    categoriaId: {type: mongoose.Schema.Types.ObjectId, ref: 'categoria'},
    quantidade: Number,
});

module.exports = produtoSchema;