money = int(input())
cnt = int(input())
sum = 0
for _ in range(cnt):
    a,b = map(int,input().split())
    sum+= a*b
if money == sum:
    print("Yes")
else:
    print("No")