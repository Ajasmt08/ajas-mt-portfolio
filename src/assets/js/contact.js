$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    $(".fh5co-loader").show();
    $(".fh5co-loader").css("opacity", ".5");
  
    var params = {
      fname: $('#fname').val(),
      lname: $('#lname').val(),
      email: $('#email').val(),
      subject: $('#subject').val(),
      message: $('#message').val()
    };
  
    emailjs.send("service_e9ke3n4", "template_ps3v88p", params)
      .then(function(response) {
        showToast("Thanks for reaching out! I'll get back to you as soon as possible.");
        $('#fname').val('');
        $('#lname').val('');
        $('#email').val('');
        $('#subject').val('');
        $('#message').val('');
        $(".fh5co-loader").fadeOut("slow");
      }, function(error) {
        $(".fh5co-loader").fadeOut("slow");
        alert("Failed to send message. " + JSON.stringify(error));
      });
  });
  
  function showToast(message) {
    $('.toast-message').text(message).fadeIn(400).delay(3000).fadeOut(400);
  }
  