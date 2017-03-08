const express = require('express');
const router = express.Router();
const article = require('../source/data/circles');

router.get('/', function (req, res) {
    let obj = {
        title: "Portfolio",
        author: "Максим Палий",
        description: "описание портфолио",
        keywords: "ключевые слова портфолио",
        bodyClass: "page-about",
        "Circles" : {
            "Frontend" : [
                {
                    "name": "HTML5",
                    "counts": "10"
                },
                {
                    "name": "CSS3",
                    "counts": "95"
                },
                {
                    "name": "JavaScript & Jquery",
                    "counts": "85"
                }
            ],
            "Backend" : [
                {
                    "name": "PHP",
                    "counts": "75"
                },
                {
                    "name": "mySQL",
                    "counts": "65"
                },
                {
                    "name": "Node.js & npm",
                    "counts": "55"
                },
                {
                    "name": "Mongo.db",
                    "counts": "45"
                }
            ],
            "WorkFlow" : [
                {
                    "name": "Git",
                    "counts": "35"
                },
                {
                    "name": "Gulp",
                    "counts": "25"
                },
                {
                    "name": "Bower",
                    "counts": "15"
                }
            ],
            "None" : [
                {
                    "name": "undefined",
                    "counts": "0"
                }
            ]
        }
    };
    //Object.assign(obj, circles);
    res.render('pages/about', obj);
});

module.exports = router;