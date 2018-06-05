const baseURL = require('./railsAPI').baseURL()

const questionsAPI = (path) => {
  return fetch(`${baseURL}/api/v1/questionnaires/1/${path}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
}

const getQuestions = () => {
  questionsAPI('questions')
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
  if (question.section_id == 1) {
    appendDemographicSection(question)
  } else if (question.section_id == 2) {
    appendClinicalSection(question)
  } else if (question.section_id == 3) {
    appendExposureSection(question)
  }
}

const appendDemographicSection = (question) => {
  $('.section.demographic').append(
    `<div class="selection" draggable="true">
      <div class="select question">${question.text}</div>
      <div class="select answer">${question.answers}</div>
    </div>`
  )
}

const appendClinicalSection = (question) => {
  $('.section.clinical').append(
    `<div class="selection" draggable="true">
      <div class="select question">${question.text}</div>
      <div class="select answer">${question.answers}</div>
    </div>`
  )
}

const appendExposureSection = (question) => {
  $('.section.exposure').append(
    `<div class="selection" draggable="true">
      <div class="select question">${question.text}</div>
      <div class="select answer">${question.answers}</div>
    </div>`
  )
}

const getExposures = () => {
  questionsAPI('exposures')
  .then(response => handleResponse(response))
  .then(questions => appendEachExposureQuestion(questions))
  .catch(error => console.error({ error }))
}

const appendEachExposureQuestion = (questions) => {
  return questions.forEach(question => {
    appendExposureQuestion(question)
  })
}

const appendExposureQuestion = (question) => {
  $('.options.exposure').append(
    `<button type="button" name="button" value="${question.id}">${question.text}</button>`
  )
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
  getClinicals,
  getExposures,
  getQuestions
}
