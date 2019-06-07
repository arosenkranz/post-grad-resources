//========== HOVER ============

$(document).on("mouseenter", ".stars1", function() {
  $(this).addClass("star-hov")
})

$(document).on("mouseenter", ".stars2", function() {
  $(this).prev().addClass("star-hov")
  $(this).addClass("star-hov")
})

$(document).on("mouseenter", ".stars3", function() {
  $(this).prev().prev().addClass("star-hov")
  $(this).prev().addClass("star-hov")
  $(this).addClass("star-hov")
})

$(document).on("mouseenter", ".stars4", function() {
  $(this).prev().prev().prev().addClass("star-hov")
  $(this).prev().prev().addClass("star-hov")
  $(this).prev().addClass("star-hov")
  $(this).addClass("star-hov")
})

$(document).on("mouseenter", ".stars5", function() {
  $(this).prev().prev().prev().prev().addClass("star-hov")
  $(this).prev().prev().prev().addClass("star-hov")
  $(this).prev().prev().addClass("star-hov")
  $(this).prev().addClass("star-hov")
  $(this).addClass("star-hov")
})

//========== ON CLICK ============

$(document).on("click", ".stars1", function() {       
  $(this).addClass("star-click")
  $(this).next().next().next().next().removeClass("star-click")
  $(this).next().next().next().removeClass("star-click")
  $(this).next().next().removeClass("star-click")
  $(this).next().removeClass("star-click")
})

$(document).on("click",".stars2", function() {
  $(this).prev().addClass("star-click")
  $(this).addClass("star-click")
  $(this).next().next().next().removeClass("star-click")
  $(this).next().next().removeClass("star-click")
  $(this).next().removeClass("star-click")
})

$(document).on("click",".stars3", function() {
  $(this).prev().prev().addClass("star-click")
  $(this).prev().addClass("star-click")
  $(this).addClass("star-click")
  $(this).next().next().removeClass("star-click")
  $(this).next().removeClass("star-click")
})

$(document).on("click", ".stars4",function() {
  $(this).prev().prev().prev().addClass("star-click")
  $(this).prev().prev().addClass("star-click")
  $(this).prev().addClass("star-click")
  $(this).addClass("star-click")
  $(this).next().removeClass("star-click")
})

$(document).on("click", ".stars5",function() {
  $(this).prev().prev().prev().prev().addClass("star-click")
  $(this).prev().prev().prev().addClass("star-click")
  $(this).prev().prev().addClass("star-click")
  $(this).prev().addClass("star-click")
  $(this).addClass("star-click")
})

//========== MOUSE LEAVE ============

$(document).on("mouseleave", ".stars5",function() {
  $(this).prev().prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().removeClass("star-hov")
  $(this).prev().removeClass("star-hov")
  $(this).removeClass("star-hov")
})

$(document).on("mouseleave", ".stars4",function() {
  $(this).prev().prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().removeClass("star-hov")
  $(this).prev().removeClass("star-hov")
  $(this).removeClass("star-hov")
})

$(document).on("mouseleave", ".stars3",function() {
  $(this).prev().prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().removeClass("star-hov")
  $(this).prev().removeClass("star-hov")
  $(this).removeClass("star-hov")
})

$(document).on("mouseleave", ".stars2",function() {
  $(this).prev().prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().removeClass("star-hov")
  $(this).prev().removeClass("star-hov")
  $(this).removeClass("star-hov")
})

$(document).on("mouseleave", ".stars1",function() {
  $(this).prev().prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().prev().removeClass("star-hov")
  $(this).prev().prev().removeClass("star-hov")
  $(this).prev().removeClass("star-hov")
  $(this).removeClass("star-hov")
})

