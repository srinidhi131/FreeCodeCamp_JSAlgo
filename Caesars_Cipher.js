function rot13(str) {
  var arr = str.split("");
  var newArr = [];
  console.log(/[a-z]/i.test(arr[0]))
  console.log(arr)
  for(var i = 0 ; i < arr.length ; i++){
    if(/[a-z]/i.test(arr[i])){
      var code = arr[i].charCodeAt(0);
      code = code - 13;
      if(code<65){
        var diff = 65 - code;
        code = 91 - diff
      }
      newArr.push(String.fromCharCode(code));
    }
    else{
      newArr.push(arr[i])
    }
  }
  console.log(newArr.join(""));
  return newArr.join("");
}

rot13("SERR PBQR PNZC");
