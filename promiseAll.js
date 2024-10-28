const gossip = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('gossip');
        resolve({'gossip': [1,3,2,4]});
    }, 3000);
});

const video = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('videos');
        resolve({videos:[1,2,3,4]});
    }, 5000);
});

Promise.all([gossip, video]).then(result => {
    console.log(result);
});