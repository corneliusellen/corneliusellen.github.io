const baseURL = require('./railsAPI').baseURL()

const questionsAPI = (path) => {
  return fetch(`${baseURL}/api/v1/questionnaires/1/${path}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
}

const getClinicals = () => {
  questionsAPI('clinicals')
  .then(response => handleResponse(response))
  .then(questions => appendEachClinicalQuestion(questions))
  .catch(error => console.error({ error }))
}

const appendEachClinicalQuestion = (questions) => {
  return questions.forEach(question => {
    appendClinicalQuestion(question)
  })
}

const appendClinicalQuestion = (question) => {
  $('.options.clinical').append(
    `<button type="button" name="button" value="${question.id}">${question.text}</button>`
  )
}

const getDemographics = () => {
  questionsAPI('demographics')
  .then(response => handleResponse(response))
  .then(questions => appendEachDemographicQuestion(questions))
  .catch(error => console.error({ error }))
}

const appendEachDemographicQuestion = (questions) => {
  return questions.forEach(question => {
    appendDemographicQuestion(question)
  })
}

const appendDemographicQuestion = (question) => {
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
  getDemographics,
  getClinicals
}
