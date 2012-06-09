(function() {

  $(document).ready(function() {
    return $.ajax({
      url: '/projects.json',
      type: 'get',
      success: function(response) {
        return console.log($.parseJSON(response));
      }
    });
  });

}).call(this);
