console.log('start');

function getItemData(id, callback){
    setTimeout(() => {
        console.log("my data");
        callback({items: [1,2,3,4,5]});
    }, 3000)
}

function getPrice(item, callback){
    setTimeout(() =>{
        callback ( {price: 300});
    },5000);
}

const items = getItemData(1, items =>{
    console.log(items);
    getPrice(items[0], price =>{
        console.log(price);
    })
});

console.log('end');