

// DB에서 user 정보 탐색
// function getUser(id) {
//     let user = null;
//     setTimeout(()=>{
//         user = users.find(user => user.id === id)
//     }, 2000);
//     return user;
// };

// console.log(getUser(1))

function getUserCallback(id, callback) {
    const users = [
        { id: 1, githubId: 'tony' },
        { id: 2, githubId: 'thor' },
        { id: 3, githubId: 'hulk' },
    ]
    setTimeout(()=>{
        const user = users.find(user => user.id === id);
        callback(user);
    },2000);
};

function getRepo(githubId, callback) {
    const repos = [
        { githubId: 'tony', commitId: 1},
        { githubId: 'tony', commitId: 2},
        { githubId: 'tony', commitId: 3},
    ];
    setTimeout(() => {
        const repo = repos.find(repo => repo.githubId === githubId);
        callback(repo);
    }, 2000);
};
function getCommit(commitId, callback) {
    const commits = [
        { commitId: 1, contents: 'first commit' },
        { commitId: 2, contents: '[ADD] commit' },
        { commitId: 3, contents: '[MOD] commit' },
    ];
    setTimeout(()=>{
        const commit = commits.find(commit => commit.commitId === commitId);
        callback(commit);
    }, 2000);
};

getUserCallback(1, user => {
    console.log('유저 찾는 중..');
    console.log(user);
    getRepo(user.githubId, repo => {
        console.log('Repo. 찾는 중..')
        console.log(repo);
        getCommit(repo.commitId, commit => {
            console.log('Commit 찾는 중..');
            console.log(commit)
        })
    })
})