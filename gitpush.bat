git pull origin master
git add .
git status
IF [%1]==[] (
  git commit -m "jaenproject"
) else (
  git commit -m "%*"
)
git push origin master
