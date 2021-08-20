
exports.min = function min (array) {
  if (array === undefined || array.length === 0){
      return 0;
  }
  let valMin = Infinity;
  for ( i = 0; i < array.length; i++) {
      if ( array[i] < valMin ) {
      valMin = array[i];
      }
      
  }
 return valMin || 0;

}

exports.max = function max (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }

  let valMax = -Infinity;
  for ( i = 0; i < array.length; i++) {
      if ( array[i] > valMax ) {
      valMax = array[i];
      }
      
  }
 return valMax;

}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }
    let valAvg = 0;
    for ( i = 0; i < array.length; i++) {
        valAvg = array[i] + valAvg;
        }
   return valAvg/array.length;
  
}
