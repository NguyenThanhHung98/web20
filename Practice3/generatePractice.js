'use strict'

function generate(testLengthArray){
  // var array = [];
  // array[i] = obj;
  // for(var i = 0; i < lengthArray.length; i++){
  //   if(i == 1){
  //     var a = lengthArray[i];
  //     var array_1 = [];
  //     for(var j = 0; j < a; j++){
  //       array_1[j] = j;
  //     }
  //     var obj = { input: array_1, target: n + 1, output: -1}
  //     array[i] = obj;
  //   }
  //   else{
  //     var a = lengthArray[i];
  //     var array_1 = [];
  //     for(var j = 0; j < a; j++){
  //       array_1[j] = j;
  //     }

  //     var obj = {input: array_1, target: n - 1, output: n - 1}
  //     array[i] = obj;
  //   }
  // }
  // return array;
  const result[];
  for(let i=0;i<testLengthArray.length;i++){
    let item = {
      input: [],
      output: null,
      target: null,
    }
    for(let j=0;j<testLengthArray[i];j++){
      item.input[j]=Math.floor(Math.random()*20000-10000);
    }
    item.input=item.input.sort((a,b) => a-b);
    item.output = item.input[Math.floor(Math.random()*testLengthArray[i])];
    item.target = item.input[item.output];
    result[i]=item;
  }
  return result;
}


module.exports = generate
