//Grab the URL of the website
const currentURL = window.location.origin;

// Capture the form inputs
$("#submit").on("click", function (event) {
  event.preventDefault();
  console.log("I'm working here");
  // Form validation
  function validateForm() {
    const isValid = true;
    $(".form-control").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function () {

      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the user"s data
    const userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(""),
        $("#q2").val(""),
        $("#q3").val(""),
        $("#q4").val(""),
        $("#q5").val(""),
        $("#q6").val(""),
        $("#q7").val(""),
        $("#q8").val(""),
        $("#q9").val(""),
        $("#q10").val("")
      ]
    }

    // AJAX post the data to the friends API.
    $.post(currentURL + "/api/friends", userData, function (data) {

      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);

      // Show the modal with the best match
      $("#results-modal").modal("toggle");
      $("#name").val("");
      $("#photo").val("");
      $(".modal-footer").html("<h3>FriendFinder</h3>");

    });

    $('#closeModal').click(function(){
      $.get('/', function(req, res){
        location.replace(res);
      })
    });
  } else {
          $(".modal-title").text("Missing Required Information");
          $(".modal-body").html("<h3>Please answer all questions to help finding your best match.</h3>");
          $(".modal-footer").html("<h3>FriendFinder</h3>");
          $("#resultsModal").modal('toggle');
  }
});