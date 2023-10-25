const quickSort = (list) => {
    if(list.length < 2) return list;
    let pivot = list[list.length -1];
    let less = [];
    let greater = [];
    for(let i = 0; i < list.length -1; i++){
        if(list[i] <= pivot) less.push(list[i]);
        if(list[i] > pivot) greater.push(list[i]);
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

let arr = [7,8,2,78,99,5,79,369,75];

console.log(quickSort(arr));