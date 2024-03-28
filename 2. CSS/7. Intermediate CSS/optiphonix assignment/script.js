
const promise = new Promise((resolve, reject)=>{
    reject()
});

const res = promise.then(()=>{
    console.log('then');
}).catch(()=>{
    console.log('catch');
}).then((data)=>{
    console.log('then after catch')
})
//catch