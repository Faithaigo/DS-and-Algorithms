/**
  The outer loop tracks the number of passes and the inner loop does the comparison of values
*/

const unnecessaryComparisons = (list) =>{
    for(let i=0; i < list.length-1; i++){
        for(let j = 0; j < list.length-1; j++){
            if(list[j] > list[j + 1]) {
               let temp = list[j]
                list[j] = list[j+1]
                list[j + 1] = temp
            }
        }
    }
   
    return list
}


/**
when the i value is increasing the number of comparisons reduces becuase the largest value bubbles up
to the end. So there is not need to compare numbers that are in the right position
 */
const necessaryComparisons = (list) =>{
    for(let i=0; i < list.length-1; i++){
        for(let j = 0; j < list.length-1-i; j++){
            if(list[j] > list[j + 1]) {
               let temp = list[j]
                list[j] = list[j+1]
                list[j + 1] = temp
            }
        }
    }
   
    return list
}



/**
 Break out of the loop when swapping has not been done in a given pass. This prevents the loop from running
 an unnecessary pass when the array could have been sorted in the previous pass
 Best when you have a sorted array
 */
const optimizedSort = (list) =>{
    for(let i=0; i < list.length-1; i++){
        let swap = 0;
        for(let j = 0; j < list.length-1-i; j++){
            if(list[j] > list[j + 1]) {
               let temp = list[j]
                list[j] = list[j+1]
                list[j + 1] = temp
                swap = 1
            }
        }
        if(swap === 0){
            break
        }
    }
   
    return list
}
