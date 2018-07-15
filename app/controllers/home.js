const express = require('express');
const debug = require('debug')('tester');
const router = express.Router();
const Article = require('../models/article');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  const articles = [new Article(), new Article()];
  debug('articles', articles);
  res.render('index', {
    title: 'Generator-Express MVC',
    articles: articles
  });
});
