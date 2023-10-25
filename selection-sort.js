const getSmallestNum = (list) => {
    let smallest = list[0];
    let smallest_index = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i] < smallest){
            smallest = list[i];
            smallest_index = i;
        }
    }
    return smallest;
}

// Works only if the array items were unique
const selectionSort = (list) => {
    let sorted_array = [];
    while(list.length){
        let smallest = getSmallestNum(list);
        sorted_array.push(smallest);
        list = list.filter(item => item != smallest);
    }
    return sorted_array;
}

let arr = [7,8,2,78,99,5,79,369,75];

console.log(selectionSort(arr));

// In place algorithm

const swap = (list, item1, item2) => {
    let temp = list[item1];
    list[item1] = list[item2];
    list[item2] = temp;
}

const inPlaceSlecetionSort = (list) => {
    for(let ptr1 = 0; ptr1 < list.length ; ptr1++){
        for(let ptr2 = ptr1 + 1; ptr2 < list.length; ptr2++) {
            if(list[ptr2] < list[ptr1]){
                swap(list, ptr2, ptr1);
            }
        }
    }
    return list;
}

console.log(inPlaceSlecetionSort(arr));