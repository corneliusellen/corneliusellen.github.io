const baseURL = require('./railsAPI').baseURL()

const patchQuestionnaire = (method, questions) => {
  var token = localStorage.getItem('token');
  var id = localStorage.getItem('questionnaire_id');
  return fetch(`${baseURL}/api/v1/questionnaires/${id}`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Questions': `${JSON.stringify(questions)}`, 'Authorization': token},
  })
}

const questionnaireFetch = (method, title) => {
  var token = localStorage.getItem('token');
  return fetch(`${baseURL}/api/v1/questionnaires`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Authorization': token, 'Title': title},
  })
}

const createQuestionnaire = (title) => {
  questionnaireFetch('POST', title)
  .then(response => handleResponse(response))
  .then(id => saveId(id))
  .catch(error => console.error({ error }))
}

const saveId = (id) => {
  var id = id.questionnaire_id;
  localStorage.setItem('questionnaire_id', id);
}

const getForms = () => {
  questionnaireFetch('GET')
  .then(response => handleResponse(response))
  .then(forms => appendEachForm(forms))
  .catch(error => console.error({ error }))
}

const appendEachForm = (forms) => {
  return forms.forEach(form => {
    appendForm(form)
  })
}

const appendForm = (form) => {
  $('.dashboard-box').prepend(
    `<div class="questionnaire">
    <img src="./lib/stylesheets/form.png" alt="form icon">
    <div>${form.title}</div>
    <a href="builder.html"><button id="${form.id}" class="view" type="button" name="view">View</button></a>
    <button id="${form.id}" class="delete" type="button" name="delete">Delete</button>
    </div>`
  )
}

const destroyQuestionnaire = (id) => {
  var token = localStorage.getItem('token');
  return fetch(`${baseURL}/api/v1/questionnaires/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json', 'Authorization': token},
  })
}

const deleteQuestionnaire = (id) => {
  destroyQuestionnaire(id)
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
  createQuestionnaire,
  getForms,
  deleteQuestionnaire
}
