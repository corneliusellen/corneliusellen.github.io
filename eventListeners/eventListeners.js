var restaurantRequests = require('../requests/restaurants')
var tagRequests = require('../requests/intake')
var questionRequests = require('../requests/questions')
var questionnaireRequests = require('../requests/questionnaire')

const etiologyIdentified = function() {
  $('#etiology-yes').on('click', function() {
    $('#etiology-no').removeClass('marked');
    $('.symptom').hide();
    $('.Etiology').slideDown("fast");
    $('.options.symptom').find('button').removeClass('marked');
  });
  $('#etiology-no').on('click', function() {
    $('#etiology-yes').removeClass('marked');
    $('.Etiology').hide();
    $('.symptom').slideDown("fast");
    $('.options.Etiology').find('button').removeClass('marked');
  })
}

const etiologyOptions = function() {
  $('body').find('.options.Etiology').one("click", 'button', function() {
    $('.Setting').slideDown("fast");
  })
}

const symptomOptions = function() {
  $('.options.symptom').find('button').one("click", function() {
    $('.Setting').slideDown("fast");
  })
}

const settingOptions = function() {
  $('body').find('.options.Setting').one("click", 'button', function() {
    $('.Transmission').slideDown("fast");
    $('.one-link.intake').slideDown("fast")
  })
}

const marked = function() {
  $('body').on('click', 'button', function() {
    $(this).toggleClass('marked')
  })
}

const markedFoodButton = function() {
  $('body').on('click', '.food-button', function() {
    $(this).toggleClass('marked')
  })
}

const markedAllMenuItems = function() {
  $('body').on('click', '.menu h2', function() {
    $(this).siblings('.food-button').toggleClass('marked')
  })
}

const markedSmallBox = function() {
  $('body').on('click', '.small-box', function() {
    $(this).toggleClass('marked');
    restaurantRequests.getMenus()
    $('.header.menu-items').slideDown("fast");
    $('.menus').slideDown("fast");
  })
}

const goBack = function() {
  $('.link.back').on('click', function() {
    window.history.back();
  })
}

const searchRestaurants = function() {
  $('.restaurant-search-button').on('click', function() {
    restaurantRequests.getRestaurants();
    $('.header.restaurants').slideDown("fast");
    $('.options-restaurants').slideDown("fast");
  })
}

const populateTags = function() {
  tagRequests.getTags()
}

const sendIntake = function() {
  $('.link.next.intake').on('click', function() {
    var marked = $('body').find('.marked')
    var tags = []
    Object.entries(marked).forEach(([key, value]) => {
      tags.push(value.value)
    });
    tags.splice(-2,2);
    tags.splice(0,1);
    tagRequests.postTags("POST", tags);
  })
}

const sendDemographics = function() {
  $('.link.next.demographic').on('click', function() {
    var marked = $('body').find('.marked')
    var questions = []
    Object.entries(marked).forEach(([key, value]) => {
      questions.push(value.value)
    });
    questions.splice(-2,2);
    questionnaireRequests.patchQuestionnaire("PUT", questions);
  })
}

const sendClinicals = function() {
  $('.link.next.clinical').on('click', function() {
    var marked = $('body').find('.marked')
    var questions = []
    Object.entries(marked).forEach(([key, value]) => {
      questions.push(value.value)
    });
    questions.splice(-2,2);
    questionnaireRequests.patchQuestionnaire("PUT", questions);
  })
}

const sendExposures = function() {
  $('.link.next.exposure').on('click', function() {
    var marked = $('body').find('.marked')
    var questions = []
    Object.entries(marked).forEach(([key, value]) => {
      questions.push(value.value)
    });
    questions.splice(-2,2);
    questionnaireRequests.patchQuestionnaire("PUT", questions);
  })
}

const populateDemographics = function() {
  questionRequests.getDemographics()
}

const populateClinicals = function() {
  questionRequests.getClinicals()
}

const populateExposures = function() {
  questionRequests.getExposures()
}

const populateQuestions = function() {
  questionRequests.getQuestions()
}

module.exports = {
  marked,
  markedSmallBox,
  markedFoodButton,
  markedAllMenuItems,
  etiologyIdentified,
  symptomOptions,
  etiologyOptions,
  settingOptions,
  goBack,
  searchRestaurants,
  populateTags,
  sendIntake,
  sendDemographics,
  sendClinicals,
  sendExposures,
  populateDemographics,
  populateClinicals,
  populateExposures,
  populateQuestions
}
