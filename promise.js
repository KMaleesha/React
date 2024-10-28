const promise  = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('data display');
        resolve({ data: 'maleesha'})
        //reject(new Error('rejected'));
    }, 5000);
});

promise.then(result =>{
    console.log(result);
}).catch(error => {
    console.log(error.message);
});