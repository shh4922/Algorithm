/**
wallpaper는 스트링배열임.
wallpaper의 길이가 y축의 길이가되고
스트링의 길이가 x축 길이임
낚이면 안되는부분은 파일시작은 왼쪽위 인데, 끝나는부분은 오른쪽아래여서 젤마지막파일은 x,y +1해야함
*/
function solution(wallpaper) {
    const xList = []
    const yList = []
    const result = []
    wallpaper.forEach((fileList,y)=> {
        for(let x=0; x<fileList.length; x++) {
           if(fileList[x] === '#') {
               xList.push(x)
               yList.push(y) 
           }
        }
    })
    result.push(Math.min(...yList))
    result.push(Math.min(...xList))
    result.push(Math.max(...yList)+1)
    result.push(Math.max(...xList)+1)
    
    return result
    // index = y
//     const xList = []
//     const yList = []
//     wallpaper.forEach((items, y)=> {
        
//         for(let i=0; i<items.length; i++) {
//             if(items[i] === '#') {
//                 yList.push(y)
//                 xList.push(i)
//             }
//         }
        
//     })
    
//     const xMax = Math.max(...xList)
//     const xMin = Math.min(...xList)
//     const yMax = Math.max(...yList)
//     const yMin = Math.min(...yList)
//     const result = []
//     result.push(yMin)
//     result.push(xMin)
//     result.push(yMax+1)
//     result.push(xMax+1)
//     return result
}