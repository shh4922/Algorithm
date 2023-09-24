def solution(cards1, cards2, goal):
    print(goal)
    answer = ''
    cnt = 0
    print(len(goal))
    
    for i in range(0,len(goal)):
        print(i)
        if cards1 and goal[i] == cards1[0]:
            cards1.remove(goal[i])
            
        elif cards2 and goal[i] == cards2[0] :
            cards2.remove(goal[i])

        else:
            answer = "No"
            break
        cnt += 1
        
    if cnt == len(goal):
        answer = "Yes"
    return answer
