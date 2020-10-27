const express = require('express');
const router = express.Router();

//Criando as rotas 
//EX: localhost:3000/products, localhost:3000/products/123
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get funcionou tambem (/products)'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message: 'Post funcionou tambem (/products)',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'especial') {
        res.status(200).json({
            message: 'Voce descobriu o ID especial',
            id: id
        });
    }else {
        res.status(200).json({
            message: 'Voce passou um ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
      message: 'Atualizado'
  });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deletado'
    });
  });

module.exports = router;