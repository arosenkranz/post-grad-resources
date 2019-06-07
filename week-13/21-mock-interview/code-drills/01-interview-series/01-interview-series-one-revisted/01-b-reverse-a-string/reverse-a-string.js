
//solution

function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
};
var str = "apple"
reverse(str);


// OR

function reverse(str){
  var rtnStr = [];
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
  
  for(var i = str.length-1; i>=0;i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}



//Bonus
function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

reverseInPlace('I am the good boy');
 // = "I ma eht doog yob"



