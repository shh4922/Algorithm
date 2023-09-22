def solution(name, yearning, photo):
    dic = dict(zip(name,yearning))
    result = []
    for i in photo:
        sum = 0        
        for j in i:
            if dic.get(j) == None:
                print("없는값")
            else:
                sum += dic[j]
        result.append(sum)

    return result