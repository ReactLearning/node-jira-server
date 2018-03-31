'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/filterLocal/:filterId')
    .get(todoList.find_filter);
  app.route('/searchJiraLocal')
     .post(todoList.searchJira);
  app.route('/userLoginLocal')
     .post(todoList.userLogin);


//   app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
};