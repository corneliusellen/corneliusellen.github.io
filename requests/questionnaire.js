const baseURL = require('./railsAPI').baseURL()

const patchQuestionnaire = (method, questions) => {
  fetch(`${baseURL}/api/v1/questionnaires/1`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Questions': `${JSON.stringify(questions)}`},
  })
}

module.exports = {
  patchQuestionnaire
}
