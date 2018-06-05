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
  $('.header.restaurants').hide()
  $('.options-restaurants').hide()
  $('.header.menu-items').hide()
  $('.menus').hide()
  events.etiologyIdentified()
  events.symptomOptions()
  events.etiologyOptions()
  events.settingOptions()
  events.goBack()
  events.searchRestaurants()
  events.marked()
  events.markedSmallBox()
  events.markedFoodButton()
  events.markedAllMenuItems()
  events.sendIntake()
  events.sendDemographics()
  events.sendClinicals()
  events.sendExposures()
})

const renderData = (fileName) => {
  if (fileName === 'intake.html' || fileName === 'intake') {
    events.populateTags()
  } else if (fileName === 'demographics.html' || fileName === 'demographics') {
    events.populateDemographics()
  } else if (fileName === 'clinical.html' || fileName === 'clinical') {
    events.populateClinicals()
  } else if (fileName === 'exposures.html' || fileName === 'exposures') {
    events.populateExposures()
  } else if (fileName === 'builder.html' || fileName === 'builder') {
    events.populateQuestions()
  }
}
