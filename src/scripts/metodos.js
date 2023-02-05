function newMap(array, callback) {
  let newMap = [];
  for (let i = 0; i < array.length; i++){
    newMap.push(callback(array[i], i, array));
}
return newMap;
}

function newFilter(array, callback) {
  let newFilter = [];
  for (let i = 0; i < array.length; i++){
    if (callback(array[i], i, array)){
        newFilter.push(array[i]);
    }
}
return newFilter;
}

function newFind(array, callback) {
  for (let i = 0; i < array.length; i++){
    if (callback(array[i], i, array)){
        return array[i];
    }
}
}

function newReduce(array, callback, initial) {
  let newReduce = 0;
  if(initial == null){
    initial = 0;
  }else{
    newReduce += initial;
    initial = 0;
  }
  for (let i = 0; i < array.length; i++){
    newReduce += callback(initial, i, array);
  }

  return newReduce;  
}






// Não alterar o código abaixo

export{
  newMap,
  newFilter,
  newFind,
  newReduce
}