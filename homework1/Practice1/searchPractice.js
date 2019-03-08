'use strict'
function binary_search(trai, phai, t, input){
  var giua = Math.floor((trai + phai) / 2);
  if(trai <= phai){
    if(input[giua] == t){
      return giua;
    }if(input[giua] > t){
      return search(trai, giua - 1, t, input);
    }
    return search(giua + 1, phai, t, input);
    
  }
  
  return -1;
}
function search(input, target) {
  let kq = search(0, input.length - 1, target, input);
  return kq;
 
}

module.exports = search
