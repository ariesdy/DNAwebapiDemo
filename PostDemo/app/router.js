'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/supplier', controller.home.index3);
  router.get('/po', controller.home.index2);
};
