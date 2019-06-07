$(document).ready(function () {

  var chosenStudentId;
  
    //Helper functions
    function renderStudents(id, house, name, pic, skills) {
  
      var crest;
  
      switch (house) {
        case "Gryffindor":
          crest = "https://vignette.wikia.nocookie.net/harrypotter/images/6/6b/Gryffindorcrest.png/revision/latest?cb=20110308010135"
          break;
        case "Slytherin":
          crest = "https://i.pinimg.com/originals/11/c4/86/11c48622a2fbaa7e4c0a18ba99c36cf9.png"
          break;
        case "Hufflepuff":
          crest = "https://i.pinimg.com/originals/3d/af/c1/3dafc187a67cd577508762150985f65c.png"
          break;
        case "Ravenclaw":
          crest = "https://mbtskoudsalg.com/images/ravenclaw-crest-png-5.png"
          break;
      }
  
  
      var htmlString = '<div class="school-students studentsExtra" id='+ id +'><h2 class="student-name">' + name + '</h2><img class="house-crest"  src=' + crest + ' alt=""><div class="teacher-contain"><img class="student-pic" src=' + pic + '>'
  
  
        for (var i = 0; i < skills.length; i++) {
          var badge;
          switch (skills[i]) {
            case "potions":
              badge = "http://www.fun-lover.com/graphic-shop/Halloween/images/Cauldrons/cauldron-012.png"
              break;
            case "herbology":
              badge = "https://vignette.wikia.nocookie.net/bloodbrothersgame/images/c/c3/Mandrake.png/revision/latest?cb=20121106225737"
              break;
            case "transfiguration":
              badge = "https://vignette.wikia.nocookie.net/harrypotter/images/7/72/MouseToSnuffbox.jpg/revision/latest?cb=20170204072349"
              break;
            case "charms":
              badge = "http://pngimg.com/uploads/feather/feather_PNG12978.png"
              break;
            case "comc":
              badge = "https://vignette.wikia.nocookie.net/howrse/images/d/de/Compagnon-hippogriffe.png/revision/latest?cb=20120822021918"
              break;
            case "divination":
              badge = "https://orig00.deviantart.net/2947/f/2010/048/a/7/crystal_ball_transparent_png_by_manoluv.png"
              break;
            case "dada":
              badge = "https://computerscience.johncabot.edu/mscaramastra/S2015/CS131/Casamassima/CS%20131/Harry%20Potter/images/dementor.png"
              break;
  
          }
          htmlString += '<div class="badges" skill="potions"><img src=' + badge + '  class="teachers-badge"></div>'
        }
      
  
      htmlString += "</div></div>"
  
      $(".students-append").append(htmlString)
  
    }
  
  
  
  
    function getStudents() {
      $.get("/api/students/all")
        .then(function (data) {
        
          for (var i = 0; i < data.length; i++) {
            if (data[i].skills.length === 7) {
              
              passOWLS(data[i].id)
              
            }
            renderStudents(data[i].id, data[i].house, data[i].name, data[i].img, data[i].skills)
          }
  
        })
    }
  
    function passOWLS(id) {
      $.ajax({
        type: "DELETE",
        url: "/api/students/" + id
      })
    }
  
    getStudents()
  
    
  //Pick student
  $(document).on("click", ".studentsExtra", function() {
   
    $(".school-students").addClass("cursor-no")
  
    $(".teachers-img").removeClass("cursor-no")
    $(".teachers-img").addClass("cursor-pointer")
    $(".teachers").addClass("skillPick")
  
    $(this).addClass("blur")
    $(this).removeClass("cursor-no")
  
    chosenStudentId = $(this).attr("id")
    $(".school-students").removeClass("studentsExtra")
  })
  
    //Add badge
    $(document).on("click", ".skillPick", function () {
      var imageSkill = $(this).attr('skill')
  
      $.ajax({
        type: "PUT",
        url:"api/students/"+ chosenStudentId +"/learn",
        data:{skills: imageSkill}
      }).then(function (data) {
          $(".students-append").empty()
          getStudents()
          $(".teacher-img").reomveClass("skillPick")
          $(".teachers-img").addClass("cursor-no")
          $(".school-students").addClass("studentsExtra")
        })
    })
  
    //Add student
    $(document).on("submit", "#addStudent", function () {
      var student = {
        name: $("#name").val().trim(),
        img: $("#img").val().trim(),
        house: $("#house").val().trim(),
        
      };
      $.post("/api/students/add", student)
        .then(function (data) {
          getStudents()
        })
    })
  
  })