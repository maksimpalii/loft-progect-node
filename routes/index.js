const express = require('express');
const router = express.Router();
//const article = require('../source/data/article');

router.get('/', function (req, res) {
    let obj = {
        title: "Home",
        author: "Максим Палий",
        description: "описание",
        keywords: "ключевые слова",
        bodyClass: "page-home"
    };
    res.render('pages/index', obj);
});

module.exports = router;