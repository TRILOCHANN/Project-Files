let nums = [77,22,55,66,88,44,99,33,11,90];

function getevenNum(arr){
    return arr.filter(num => num % 2 ===0);
}

let evenNum = getevenNum(nums);
console.log(evenNum);
