$('.user-list-button').click(function() {
  alert('hellooo');
  var message = $('.messages');
  var userList = $('.usr-list');

  if (messages.hasClass('active')) {
    //hide
    messages.removeClass('active');
  } else {
    //show
    messages.addClass('active')
  }
});
