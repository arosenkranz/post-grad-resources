$('#findStudent').on('submit', function(event){
  event.preventDefault();
  var student = $('#studentInput').val().trim();
  console.log(student)
  window.location.href = `/api/v1.0/hogwarts-students/student/${student}`;
})