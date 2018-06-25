const baseURL = require('./railsAPI').baseURL()

const patchQuestionnaire = (method, questions) => {
  var token = localStorage.getItem('token');
  fetch(`${baseURL}/api/v1/questionnaires/0`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Questions': `${JSON.stringify(questions)}`, 'Authorization': token},
  })
}

module.exports = {
  patchQuestionnaire
}
