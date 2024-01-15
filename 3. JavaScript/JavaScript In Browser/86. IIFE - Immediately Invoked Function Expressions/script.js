let myPromise = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1234)
    },2000)
});

(async()=>{
    console.log(await myPromise)
})();

