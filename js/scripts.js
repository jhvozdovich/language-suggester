


$(document).ready(function() {
  $(".start").click(function(){
    $(".intro").hide();
    $(".quiz").show();
  })

  $("form#responses").submit(function(event){
    event.preventDefault();

    var difficulty = $("input:radio[name=difficulty]:checked").val();
    var interest = $("#interest").val();

    if ((difficulty === "easy") && (interest === "Back-End" || interest === "Both")) {
      $(".quiz").hide();
      $("#python").show();
    } else if ((difficulty === "easy" || difficulty === "medium") && (interest === "Front-End" || interest === "Both")) {
      $(".quiz").hide();
      $("#javascript").show();
    } else if ((difficulty === "hard") ) {
      $(".quiz").hide();
      $("#csharp").show();
    } else {
      alert("Please complete the quiz!")
    }
  })  
})