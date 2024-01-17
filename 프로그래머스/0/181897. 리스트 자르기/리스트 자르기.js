function solution(n, slicer, num_list) {
    let result;
    switch(n){
        case 1:
            result = num_list.slice(0,slicer[1]+1)
            break;
        case 2:
            result = num_list.slice(slicer[0])
            break;
        case 3:
            result = num_list.slice(slicer[0], slicer[1]+1)
            break;
        case 4:
            result = num_list.slice(slicer[0], slicer[1]+1)
            result = result.filter((value,index) => {
                return index % slicer[2] === 0
            })
            break;
    }
    return result
}