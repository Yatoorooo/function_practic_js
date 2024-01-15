'use strict';



const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
   array.splice(4, 1);
   return array;
};
console.log(removeElement(array));
// Результат: [1, 2, 3, 4, 6, 7]