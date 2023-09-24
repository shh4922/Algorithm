def solution(k, score):
    answer = []
    ary = []
    
    for i in range(0,len(score)):
        
        if i >= k :
            if ary[k-1] < score[i]:
                ary.append(score[i])   
                ary.sort(reverse = True)
                answer.append(ary[k-1])
            else:
                answer.append(ary[k-1])    
        else:
            ary.append(score[i])   
            ary.sort(reverse = True)
            answer.append(ary[i])
    return answer