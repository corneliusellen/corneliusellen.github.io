require('./lib/stylesheets/application.scss');
const events = require('./eventListeners/eventListeners');

$(document).ready(function() {
  $('.etiology').hide()
  $('.symptom').hide()
  $('.setting').hide()
  $('.transmission').hide()
  $('.one-link.intake').hide()
  events.marked()
  events.etiologyIdentified()
  events.symptomOptions()
  events.etiologyOptions()
  events.settingOptions()
  events.goBack()
})
