// console.log("Main");
// console.log("Branch-1 with some features | Enhenced");
// console.log("Branch-2 with some features");
// console.log("So much of work");


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 3000)
})

async function demo() {
    console.log("Start");
    console.log("Response : ", await p);
    console.log("end");
}
demo();