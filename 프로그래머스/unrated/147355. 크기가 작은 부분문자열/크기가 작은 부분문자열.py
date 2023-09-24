def solution(t, p):
    answer = 0
    cnt = len(t) - len(p) + 1
    ary = []
    
    for i in range(0,cnt):
        cnt = t[i:len(p)+i]
        ary.append(cnt)

    for i in ary:
        if int(i) <= int(p):
            answer += 1

    return answer