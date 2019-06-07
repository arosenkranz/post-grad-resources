function productivity(data, id) {
  var productivityPts = 0;
  var subId; 

  // Grabs all necessary info for minion in question
  for (var i = 0 ; i < data.length ; i++ ) {
    if (data[i][0] === id) {
      productivityPts+=data[i][1]
      subId = data[2]
    }
  }

  for (var i = 0 ; i < subId.length; i++) {

    for(var j = 0 ; j < data.length; j++) {
      if (data[j][0] === subId[i]) {

        productivityPts+=data[j][1]
      }
    }

  }

  return productivityPts;

}

console.log(productivity([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1))