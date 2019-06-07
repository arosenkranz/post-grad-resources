function pyramid(n) {

  for (var i = 0 ; i < n ; i++) {
    str = "\""
    str+= " ".repeat(n - i - 1)
    str+="#".repeat(2 * i + 1)
    str+= " ".repeat(n - i - 1)
    str+= "\""
    console.log(str)
  }

}

pyramid(8)
pyramid(4)
