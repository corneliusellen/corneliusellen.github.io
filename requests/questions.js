const baseURL = require('./railsAPI').baseURL()

const foodsAPIFetch = (payload) => {
  var token = localStorage.getItem('token');
  var id = localStorage.getItem('questionnaire_id');
  return fetch(`${baseURL}/api/v1/questionnaires/${id}/foods`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'foods': `${JSON.stringify(payload)}`, 'Authorization': token},
  })
}

const postFoods = (payload) => {
  foodsAPIFetch(payload)
}

const questionsAPI = (path) => {
  var token = localStorage.getItem('token');
  var id = localStorage.getItem('questionnaire_id');
  return fetch(`${baseURL}/api/v1/questionnaires/${id}/${path}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'Authorization': token},
  })
}

const getMenuItems = () => {
  questionsAPI('foods')
  .then(response => handleResponse(response))
  .then(menuItems => appendEachMenuItem(menuItems))
  .catch(error => console.error({ error }))
}

const appendEachMenuItem = (menuItems) => {
  return menuItems.forEach(menuItem => {
    appendMenuItem(menuItem)
  })
}

const appendMenuItem = (menuItem) => {
  $('.section.menu-items').append(
    `<div class="selection" draggable="true">
      <div class="select dish">${menuItem.dish}</div>
      <div class="select ingredients">${menuItem.ingredients}</div>
    </div>`
  )
}

const getQuestions = () => {
  questionsAPI('questions')
  .then(response => handleResponse(response))
  .then(questions => appendEachQuestion(questions))
  .catch(error => console.error({ error }))
}

const appendEachQuestion = (questions) => {
  questions.forEach(question => {
    appendQuestion(question)
  });
  numberQuestions()
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

const numberQuestions = () => {
  var quesion_text = $('body').find('.select.question')
  var array = []
  Object.entries(quesion_text).forEach(([key, value], index) => {
    value.prepend(`${index + 1}. `)
  })
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
  getQuestions,
  getMenuItems,
  postFoods
}
