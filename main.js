require('./lib/stylesheets/application.scss');
const events = require('./eventListeners/eventListeners');
var fileName = location.pathname.split('/').slice(-1)[0]

$(document).ready(function() {
  renderData(fileName)
  $('.Etiology').hide()
  $('.symptom').hide()
  $('.Setting').hide()
  $('.Transmission').hide()
  $('.one-link.intake').hide()
  events.etiologyIdentified()
  events.symptomOptions()
  events.etiologyOptions()
  events.settingOptions()
  events.goBack()
  events.searchRestaurants()
  events.marked()
  events.sendIntake()
  events.sendDemographics()
  events.sendClinicals()
})

const renderData = (fileName) => {
  if (fileName === 'intake.html' || fileName === 'intake') {
    events.populateTags()
  } else if (fileName === 'demographics.html' || fileName === 'demographics') {
    events.populateDemographics()
  } else if (fileName === 'clinical.html' || fileName === 'clinical') {
    events.populateClinicals()
  }
}
