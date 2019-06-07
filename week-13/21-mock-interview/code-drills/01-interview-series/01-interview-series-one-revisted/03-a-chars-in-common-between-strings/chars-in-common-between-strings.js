
// Solution

function Common(str1,str2){
  var obj = {};
  var commonStr = '';
  for(var i=0; i<str1.length; i++){
    obj[str1[i]] = true;
  }
  for(var i=0; i<str2.length; i++){
    if(obj[str2[i]]){
      commonStr += str2[i];
      obj[str2[i]] = false;
    }
  }
  return commonStr;
}

//complexity O(n+m) where n is the size of str1 and m is the size of str2


