# 모든달은 28일까지있음

def solution(today, terms, privacies):
    answer = []
    dic = {}
    for i in terms:
        list = i.split()
        dic[list[0]] = int(list[1])
    
    # list[0] 년
    # list[1] 월
    # list[2] 일
    # list[3] 기준
    
    today_list = today.split(".")
    today_sum = int(today_list[0])*12*28 + int(today_list[1])*28 + int(today_list[2])
    cnt = 1
    for i in privacies:
        replace_i = i.replace(' ','.')
        list = replace_i.split(".")    
        sum = int(list[0])*12*28 + int(list[1])*28 + int(list[2])
        
        if today_sum - sum >= int(dic[list[3]]) * 28:
            answer.append(cnt)
        cnt += 1
    
    return answer