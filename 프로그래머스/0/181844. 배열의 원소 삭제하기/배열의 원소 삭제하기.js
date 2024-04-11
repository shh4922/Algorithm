function solution(arr, delete_list) {
    for(let value of delete_list) {
        const index = arr.indexOf(value)
        if(index !== -1){
            arr.splice(index,1)
            console.log(arr)
        }
    }
    return arr
    
}