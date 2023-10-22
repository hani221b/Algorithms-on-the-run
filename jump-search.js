const jumpSearch = (list, target) => {
    let start = 0;
    let step = 4;
    let applyLinear = false;
    while(list[start] < target) {
        applyLinear ? start++ : start = start - 1 + step;
        
        if(list[start] === target) return start;

        if(list[start] > target){
            start = start - step;
            applyLinear = true;
        }
    }
    return "not found!";
}

let arr = [...Array(100).keys()];

console.log(jumpSearch(arr, 45));