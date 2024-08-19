function solution(phone_number) {
    let str = ''
    const str2 = phone_number.slice(-4,phone_number.length)
    for(let i=0; i<phone_number.length-4; i++) {
        str+= '*'
    }
    str+=str2
    return str;
}