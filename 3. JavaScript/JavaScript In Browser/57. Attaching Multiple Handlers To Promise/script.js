/*
Attaching Multiple Handler TO A Promise
1. In promise chaning the next promise handler required the privious promise handler resolved value.
2. But below we are attaching multiply handler to a promise which run independly and do not required the previous promise handler value.
*/

const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Running p1 promise");
            resolve("promise resolved");
        }, 2000);
    });
};

p1()
    .then((value) => {
        console.log("The resolved value of promise 1:", value);
        return Promise.resolve(); // Ensure the next .then gets a defined value
    })
    .then(() => {
        console.log("Running second handler independently");
        return Promise.resolve(); // Ensure the next .then gets a defined value
    })
    .then(() => {
        console.log("Running third handler independently");
    });
