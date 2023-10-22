const binarySearch = (list, target) => {
    let low = 0;
    let high = list.length -1;
    while(low <= high){
        let mid = Math.floor((low + high) /2);
        if(list[mid] === target) return mid;
        if(list[mid] > target) high = mid - 1; 
        if(list[mid] < target) low = mid + 1;
    }   
    return "not found";
}

let arr = [...Array(1000).keys()];
console.log(binarySearch(arr, 999));