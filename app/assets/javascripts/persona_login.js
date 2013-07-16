$(".persona-button").click(function(e) {
  e.preventDefault();

  navigator.id.get(function(assertion) {
    if (assertion) {
      $.ajax({
        url: '/users/sign_in',
        type: "POST",
        dataType: "json",
        cache: false,
        data: {
          "assertion": assertion
        },
        success: function(data, status) {
          window.location.href = '/';
        },
      });
    }
  });
});