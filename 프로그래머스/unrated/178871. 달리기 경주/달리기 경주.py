
def solution(players, callings):
    
    # result = players
    
    result = {string : i for i,string in enumerate(players)}
    
    for i in callings :
        index = result[i]
        if index == 0 :
            break
        else:
            result[i] -= 1
            result[players[index-1]] += 1
            players[index-1],players[index] = players[index],players[index-1]
    return players



