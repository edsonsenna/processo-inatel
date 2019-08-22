const express = require('express');
const router = express.Router();

const Smartphone = require('../models/Smartphone');

router.get('/', (req, res) => {

    Smartphone.find()
        .then( smartphones => {
            res.json(smartphones);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {

    Smartphone.findById(req.params.id)
        .then(smartphone => {
            res.json(smartphone);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    const newSmartphone = new Smartphone({
        modelo: req.body.modelo,
        fabricante: req.body.fabricante,
        capacidade_armazenamento: req.body.capacidade_armazenamento,
        tamanho_tela: req.body.tamanho_tela,
        versao_so: req.body.versao_so
    });

    newSmartphone
        .save()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {

    const newInfo = {
        modelo: req.body.modelo,
        fabricante: req.body.fabricante,
        capacidade_armazenamento: req.body.capacidade_armazenamento,
        tamanho_tela: req.body.tamanho_tela,
        versao_so: req.body.versao_so
    };


    Smartphone.findOneAndUpdate({_id: req.params.id }, newInfo, {new: true})
        .then(smartphone => {
            res.json(smartphone);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


router.delete('/:id', (req, res) => {
    
    Smartphone.findOneAndDelete({_id: req.params.id})
        .then(smartphone => {
            res.json(smartphone);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;