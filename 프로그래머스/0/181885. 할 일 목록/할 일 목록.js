function solution(todo_list, finished) {
    return todo_list.filter((value,i) => {
        return !finished[i]
    })
}