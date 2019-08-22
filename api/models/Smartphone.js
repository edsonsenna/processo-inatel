const mongoose = require('mongoose');
const { Schema } = mongoose;

const smartphoenSchema = new Schema({
    modelo: {
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    },
    capacidade_armazenamento: {
        type: Number,
        required: true
    },
    tamanho_tela: {
        type: Number,
        required: true
    },
    versao_so: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('smartphones', smartphoenSchema);