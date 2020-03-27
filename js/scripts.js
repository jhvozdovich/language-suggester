


$(document).ready(function() {
  $(".start").click(function(){
    $(".intro").hide();
    $(".quiz").show();
  })

  $("form#responses").submit(function(event){
    event.preventDefault();

    var difficulty = $("input:radio[name=difficulty]:checked").val();

    if ((difficulty === "easy")) {
      $(".quiz").hide();
      $("#python").show();
    } else if ((difficulty === "medium")) {
      $(".quiz").hide();
      $("#javascript").show();
    } else if ((difficulty === "hard")) {
      $(".quiz").hide();
      $("#csharp").show();
    } else {
      alert("Please complete the quiz!")
    }
  })  
})