# 평균 계산
# 3개의 점수 입력바다 높은 2개의 평균
scoreList = [0,1,2]
for e in range(0,3):
    scoreList[e] = int(input("%d번째 점수를 입력하세요\n" %(e+1)))
scoreList.sort()
print("전체 평균 점수는 %.2f 점 입니다." %round((scoreList[1]+scoreList[2])/2,2))
