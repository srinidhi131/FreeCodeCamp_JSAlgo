function palindrome(str) {
  var temp = str.replace(/\W|_/g, '').toLowerCase()
  var flag = 0;
  var j = temp.length - 1
  for(var i = 0 , j ; i<= str.length/2;i++,j--){
    if(temp[i] !== temp[j]){
      flag = 1;
      break;
    }
  }
  if(flag === 0){
    return true;
  }
  return false;
}
palindrome("_eye");
