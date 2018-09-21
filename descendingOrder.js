/*
Descending Order

Your task is to make a function that can take any non-negative integer as a
argument and return it with its digits in descending order. Essentially,
rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221

//best practice solution:
return parseInt(String(n).split('').sort().reverse().join(''))
*/

function descendingOrder(n){
    //split number into an array of strings
    var array = (""+n).split("");
    //sort by descending order
    array.sort(function(a,b){
        return b-a;
    });
    //parse integer from rejoining the array of strings
    return parseInt(array.join(""));
};

descendingOrder(0); //0
descendingOrder(1); //1
descendingOrder(123456789); //987654321
