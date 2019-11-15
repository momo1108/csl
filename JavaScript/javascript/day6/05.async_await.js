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

// ES6

async function getInfo() {
    const user = await getUser(1);
    const repo = await getRepo(user);
    const commit = await getCommit(repo);
    console.log(commit);
}
getInfo()