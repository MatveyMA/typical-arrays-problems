
exports.min = function min (array) {
if((typeof array)!=="undefined")
{
  let len = array.length;
  if(len==0)
  return 0;
  else
  for (i = 0; i < len; i++) 
  {
    if(array[i] < array[0]){
        array[0] = array[i];
    }
  }
  return array[0];
}
else 
return 0;
}

exports.max = function max (array) {
  if((typeof array)!=="undefined")
  {
  let len = array.length;
  if(len==0)
  return 0;
  else
  for (i = 0; i < len; i++) 
  {
    if(array[i] > array[0]){
        array[0] = array[i];
    }
}
  return array[0];
}
else 
return 0;
}

exports.avg = function avg (array) {
  if((typeof array)!=="undefined")
  {
  let len, i,summ;
  len = array.length;
  if(len==0)
  return 0;
  else
  summ = 0;
  for(i=0;i<len;i++)
  {
    summ=summ+array[i];
  }
  let result = summ/len;
  return result;
}
else
return 0;
}
