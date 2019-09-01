function resolveAfter(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}
function timeout(ms, promise) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(Error(`Operation timed out after ${ms}ms`))
        }, ms);
    });
    return Promise.race([promise, timeoutPromise])
}
const promise = resolveAfter(1000, "A")
timeout(500, promise).then(
    value => {
        consolelog(value)
    },
    error => {
        console.log(error.message);
    }
)