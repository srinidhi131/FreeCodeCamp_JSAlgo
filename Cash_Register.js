function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var totalAvail = 0;
  var changeArr = {
      "ONE HUNDRED": { value : 100,
      available: cid[8][1]},
      TWENTY: { value : 20,
      available: cid[7][1]},
      TEN: { value : 10,
      available: cid[6][1]},
      FIVE: { value : 5,
      available: cid[5][1]},
      ONE : { value : 1,
      available: cid[4][1]},
      QUARTER : { value : 0.25,
      available: cid[3][1]},
      DIME : { value : 0.1,
      available: cid[2][1]},
      NICKEL : { value : 0.05,
      available: cid[1][1]},
      PENNY : { value : 0.01,
      available: cid[0][1]}
  };
  var changeArray = [];
  var res = [];
  for(var i =0; i<cid.length ; i++){
    totalAvail += cid[i][1];
  }
  function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

  if(change>totalAvail){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else if(change === totalAvail){
    return {status: "CLOSED", change: cid}
  }
  else{
    for ( i in changeArr ) {
      var count  = 0;
    while ( change >= changeArr[i].value && changeArr[i].available > 0) {
      changeArr[i].available -= changeArr[i].value;
      change -= changeArr[i].value;
      count += 1;
      change = round(change);
    }
    changeArray.push(count)
    }
    if(change === 0){
  for( var i =0; i<changeArray.length ; i++){
    changeArray[i] = changeArray[i] * Object.values(changeArr)[i].value
    if(changeArray[i] !== 0){
    var temp=[Object.keys(changeArr)[i],changeArray[i]]
    res.push(temp)
    }
  }
  return {status: "OPEN", change: res}
  }
  else{
  return {status: "INSUFFICIENT_FUNDS", change: []}
}
}
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
