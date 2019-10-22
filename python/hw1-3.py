myStr = list(input("영어 구문을 입력하세요\n").lower())
myStr.sort()
count = 1
for e in range(1,len(myStr)):
    if(myStr[e-1]>="a" and myStr[e-1]<="z"):
        if myStr[e-1]==myStr[e]:
            count += 1
        else:
            print(myStr[e-1]," : ",count)
            count = 1
    
