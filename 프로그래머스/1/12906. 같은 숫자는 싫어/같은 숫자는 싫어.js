function solution(arr)
{
    let answer = [arr[0]];
    for(let i=0; i<arr.length; i++) {
        if(answer[answer.length-1] !== arr[i]) {
            answer.push(arr[i])
        }
    }
    return answer;
}