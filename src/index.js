
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (!matrix || matrix.lenght == 0){
  return []
}
let result = [];

matrix.forEach((element,index) => {
  if (index % 2 !== 0){
    console.log(element)
    result = result.concat(element.reverse())
  } else{
     result = result.concat(element)
  }
});
return result;
}


 


