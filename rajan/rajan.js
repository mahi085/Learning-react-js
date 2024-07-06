// const a = 12;
// const b = 13;
// sum(a, b);

// const c = 13;
// const d = 16;
// sum(c, b);

// function sum(a, b) {
//     const sum = a + b;
//     console.log("result is",sum);
// }
// console.log("hello");
// setTimeout(function () {
//     console.log("this is excute ater ");
// }, 3000);
// console.log("world");
const ticket = new Promise(function (resolve, reject) {
    const isBarded = true;
    if (isBarded) {
        resolve("you are not in the flight ");
    }
    else {
        reject("your flight in canceled");
    }
});
ticket.then((data) => {
    console.log("sachin" ,data);
})
    .catch((data) => {
        console.log("oh no");
})