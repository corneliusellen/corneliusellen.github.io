// module.exports = function (name, element) {
//   element.textContent = 'Bye' + name + '!';
// };

const etiologyIdentified = function() {
  $('#etiology-yes').on('click', function() {
    $('#etiology-no').removeClass('marked');
    $('.symptom').hide();
    $('.etiology').slideDown("fast");
    $('.options.symptom').find('button').removeClass('marked');
  });
  $('#etiology-no').on('click', function() {
    $('#etiology-yes').removeClass('marked');
    $('.etiology').hide();
    $('.symptom').slideDown("fast");
    $('.options.etiology').find('button').removeClass('marked');
  })
}

const etiologyOptions = function() {
  $('.options.etiology').find('button').one("click", function() {
    $('.setting').slideDown("fast");
  })
}

const symptomOptions = function() {
  $('.options.symptom').find('button').one("click", function() {
    $('.setting').slideDown("fast");
  })
}

const settingOptions = function() {
  $('.options.setting').find('button').one("click", function() {
    $('.transmission').slideDown("fast");
    $('.one-link.intake').slideDown("fast")
  })
}

const marked = function() {
  $('button').on('click', function() {
    $(this).toggleClass('marked')
  })
}

const goBack = function() {
  $('.link.back').on('click', function() {
    window.history.back();
  })
}

module.exports = {
  marked,
  etiologyIdentified,
  symptomOptions,
  etiologyOptions,
  settingOptions,
  goBack
}
