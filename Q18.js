// Q18. Seeing the World: T/hink of at least five places in the world you'd like to visit.
// _Store the locations in a Array. Make sure the array is not in alphabetical order .
// _Print your array in its original order .
// _Print your array in alphabetical order without modifying the actual list .
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1st task
var placesVisit = ["DUBAI", "AUSTRALIA", "TURKEY", "AMERICA", "SOUTH KOREA"];
// 2nd task 
console.log(placesVisit);
// 3rd task
console.log(__spreadArray([], placesVisit, true).sort());
// 4th task
console.log(placesVisit);
// 5th task
console.log(__spreadArray([], placesVisit, true).sort().reverse());
// 6th task
console.log(placesVisit);
// 7th task
placesVisit.reverse();
console.log(placesVisit);
// 8th task
placesVisit.sort();
console.log(placesVisit);
// 9th task
placesVisit.sort();
console.log(placesVisit);
//10th task
console.log(__spreadArray([], placesVisit.sort(), true));
