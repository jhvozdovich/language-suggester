$(document).ready(function() {
  $(".start").click(function(){
    $(".intro").hide();
    $(".quiz").show();
  })

  $("#all").click(function(){
    $(".intro").hide();
    $(".quiz").hide();
    $(".results").show();
  })

  $("form#responses").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var goal = $("#goal").val();
    var difficulty = $("input:radio[name=difficulty]:checked").val();
    var interest = $("#interest").val();
    var project = $("input:radio[name=projct]:checked").val();
    var platform = $("#platform").val();

    if (name.length === 0) {
      alert("Don't forget to enter your name!");
      return true;
    }

    if ((difficulty === "easy") && (interest !== "Front-End") || (project === "data") || (platform === "Desktop")) {
      $(".quiz").hide();
      $("#python").show();
    } else if ((difficulty !== "hard") && (interest === "Front-End" || interest === "Both") || (project === "websites") || (platform === "Web")) {
      $(".quiz").hide();
      $("#javascript").show();
    } else if ((goal !== "maker") && (difficulty === "hard") || (project === "games" || project === "desktop") || (platform !== "Web")) {
      $(".quiz").hide();
      $("#csharp").show();
    } else {
      $(".quiz").hide();
      alert("Wow you have some diverse tastes! We're not sure where to place you. Here are all of our options!")
      $(".results").show();
    }

    $(".name").text(name);

    $("#greeting").show();

    $("#refresh").show();
  })  

  $("#refresh").click(function(){
    location.reload();
  })
})