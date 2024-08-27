function solution(n)
{
    return n.toString().split('').map((value)=>{return Number(value)}).reduce((a,b,index) => {return a+b},0)
}