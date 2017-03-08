const express = require('express');
const router = express.Router();
const article = require('../source/data/article');

router.get('/', function (req, res) {
    let obj = {
        title: "Blog",
        author: "Максим Палий",
        description: "описание блога",
        keywords: "ключевые слова блога",
        bodyClass: "page-blog"
    };
    Object.assign(obj, article);
    res.render('pages/blog', obj);
});

module.exports = router;