function steps(n) {

  for (var i = 1 ; i <= n ; i++) {
    var str = "\"";
    str += "#".repeat(i)
    str += " ".repeat(n-i)
    str += "\""
    console.log(str)
  }

}

steps(4)