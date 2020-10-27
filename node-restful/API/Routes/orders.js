const express = require('express');
const router = express.Router();

//Criando as rotas 
//EX: localhost:3000/orders, localhost:3000/orders/123
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Ordem ok'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Ordem criada',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Detalhes da ordem',
        orderId : req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Ordem deletada',
        orderId : req.params.orderId
    });
});


module.exports = router;