// ! higher order function ===> ES5, ES6 :  (map, filter, every, some, find) "takes a function as prameter"

// ? filter :   cutting

/**
 
 * 
let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let x = nums.filter(
  (index) => index > 30 // the prameter will be the index
);
console.log(x);

 */
// ? map :    adding or updating
/**
 let friends = ["ahmed", "bogy", "omar", "zanet", "zeen"];
let newFriends = []
for(x of friends){
    newFriends.push("mr. " + x)
}
console.log(newFriends);

let newFriends = friends.map( index => `mr..... ${index}`)
console.log(newFriends);
*/

// ? every : boolean ==> the condition must matches with all the elemnte of the array

/**
 * 
let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let x = nums.every((num) => num > 10);
console.log(x);
 */
// ? some : boolean ==> the condition must matches with at least one of the elemnte of the array

export let nums = [10, 20, 30, 40, 50, 60, 70, 80];
// let x = nums.some((num) => num = 20);
// console.log(x);

// ? find : returns the element who matches the condition
