function solution(num_list) {
    const jj = num_list.reduce((ac,cur,i)=> {
      if(i%2 === 0) {
          return ac+=cur
      } else {
          return ac
      }
    },0)
    
    const hh = num_list.reduce((ac,cur,i)=> {
      if(i%2 !== 0) {
          return ac+=cur
      } else {
          return ac
      }
    },0)
    
    return jj>hh ? jj : hh
}