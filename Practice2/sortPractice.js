'use strict'

function sort(input) {
  for(var i=0;i<input.lenght;i++){
    for(var j=i+1;j<=input.lenght;j++){
      if(input[i]<input[j]){
        var temp=input[i];
        input[i]=input[j];
        input[j]=temp;
      }
    }
  }
  for(var i=0;i<=input.lenght;i++){
    return input[i];
  }
}

module.exports = sort
