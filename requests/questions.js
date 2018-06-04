const baseURL = require('./railsAPI').baseURL()

const questionsAPI = (path) => {
  return fetch(`${baseURL}/api/v1/questionnaires/1/${path}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
}

const getDemographics = () => {
  questionsAPI('demographics')
  .then(response => handleResponse(response))
  .then(questions => appendEachQuestion(questions))
  .catch(error => console.error({ error }))
}

const appendEachQuestion = (questions) => {
  return questions.forEach(question => {
    appendQuestion(question)
  })
}

const appendQuestion = (question) => {
  $('.options.demographics').append(
    `<button type="button" name="button" value="${question.id}">${question.text}</button>`
  )
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
  getDemographics
}
