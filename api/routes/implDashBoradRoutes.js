'use strict';
module.exports = function (app) {
  var jiraList = require('../controllers/jiraListController');

  // jiraList Routes
  app.route('/filterLocal/:filterId')
    .get(jiraList.find_filter);
  app.route('/searchJiraLocal')
    .post(jiraList.searchJira);
  app.route('/userLoginLocal')
    .post(jiraList.userLogin);

  var jiraWorkLog = require('../controllers/jiraWorkLogController');

  // jiraWorkLog Routes
  app.route('/workLogSince/:workLogSince')
    .get(jiraWorkLog.findWorkLogSince);

  //   app.route('/tasks/:taskId')
  //     .get(jiraList.read_a_task)
  //     .put(jiraList.update_a_task)
  //     .delete(jiraList.delete_a_task);
};