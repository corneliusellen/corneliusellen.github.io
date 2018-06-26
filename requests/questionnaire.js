const baseURL = require('./railsAPI').baseURL()

const patchQuestionnaire = (method, questions) => {
  var token = localStorage.getItem('token');
  var id = localStorage.getItem('questionnaire_id');
  fetch(`${baseURL}/api/v1/questionnaires/${id}`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Questions': `${JSON.stringify(questions)}`, 'Authorization': token},
  })
}

const questionnaireFetch = (method) => {
  var token = localStorage.getItem('token');
  fetch(`${baseURL}/api/v1/questionnaires`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Authorization': token},
  })
}

const createQuestionnaire = () => {
  questionnaireFetch('POST')
  .then(response => handleResponse(response))
  .then(id => saveId(id))
  .catch(error => console.error({ error }))
}

const saveId = (id) => {
  var id = id.questionnaire_id;
  localStorage.setItem('questionnaire_id', id);
}

const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusTest: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

module.exports = {
  patchQuestionnaire,
  createQuestionnaire
}
