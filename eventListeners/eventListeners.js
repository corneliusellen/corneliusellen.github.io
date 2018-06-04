var restaurantRequests = require('../requests/restaurants')
var tagRequests = require('../requests/intake')
var questionRequests = require('../requests/questions')

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

const goBack = function() {
  $('.link.back').on('click', function() {
    window.history.back();
  })
}

const searchRestaurants = function() {
  $('.restaurant-search-button').on('click', function() {
    restaurantRequests.getRestaurants()
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

const populateDemographics = function() {
  questionRequests.getDemographics()
}

module.exports = {
  marked,
  etiologyIdentified,
  symptomOptions,
  etiologyOptions,
  settingOptions,
  goBack,
  searchRestaurants,
  populateTags,
  sendIntake,
  populateDemographics
}
