let arr1 = [390,388,300,327,298,587,853,288];
let arr2 = [483,288,345,379,555,888,777,999];

function mergeAndSort(arr1,arr2){
    const merged = [...arr1,...arr2];
    return merged.sort((a,b)=> a -b);
}


const result = mergeAndSort(arr1,arr2);
console.log(result);

// If you're working with strings, like names or fruits, remove the (a, b) => a - b part