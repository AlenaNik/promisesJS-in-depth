function sleep(ms) {
    return new Promise((resolve) => {
        throw new Error("...");
        setTimeout(resolve, ms);
    });
}

console.log("Getting right away");

sleep(1000)
    .then(() => {
        console.log("Fulfulled");
    })
    .then(() => sleep(1000))
    .then(() => {console.log("After 2s");
})
    .catch(() => {
        console.log("Rejected")
    });