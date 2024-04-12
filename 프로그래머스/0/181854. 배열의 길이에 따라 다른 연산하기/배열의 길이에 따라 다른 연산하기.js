function solution(arr, n) {
    const a = Math.floor(arr.length % 2)
    if(a === 0) {
        return arr.map((value,index) => {
            if(index%2 === 1){
                return (value+n)
            }
            return (value)
        })
    } else {
        return arr.map((value,index) => {
            if(index%2 === 0){
                return (value+n)
            }
            return (value)
        })
    }
}