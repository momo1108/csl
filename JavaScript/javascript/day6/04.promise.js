// const promise = new Promise((resolve, reject) => {
//     resolve('성공');
//     reject('실패');
// });

// promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// 랜덤실패

// const getAccount = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const number = Math.floor(Math.random() * 100);
//         // console.log(number);
//         if (!(number % 2)) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     }, 2000);
// });

// getAccount
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

function getUser(id) {
    const users = [
        { id: 1, githubId: 'tony' },
        { id: 2, githubId: 'thor' },
        { id: 3, githubId: 'hulk' },
    ]
    console.log('유저 찾는 중');
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            user? resolve(user.githubId):reject(new Error('유저가 없습니다.'))
        }, 2000);
    })
};

function getRepo(githubId) {
    const repos = [
        { githubId: 'tony', commitId: 1 },
        { githubId: 'tony', commitId: 2 },
        { githubId: 'tony', commitId: 3 },
    ];
    console.log('Repo 찾는 중');
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const repo = repos.find(repo => repo.githubId === githubId);
            repo? resolve(repo.commitId):reject(new Error('Repo 가 없습니다.'))
        }, 2000);
    })
};
function getCommit(commitId) {
    const commits = [
        { commitId: 1, contents: 'first commit' },
        { commitId: 2, contents: '[ADD] commit' },
        { commitId: 3, contents: '[MOD] commit' },
    ];
    console.log('Commit 찾는 중');
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const commit = commits.find(commit => commit.commitId === commitId);
            commit? resolve(commit):reject(new Error('Commit  없습니다.'))
        }, 2000);
    })
};

getUser(1)
    .then(res => getRepo(res))
    .then(res => getCommit(res))
    .then(res => console.log(res))
    .catch(err => console.log(err))