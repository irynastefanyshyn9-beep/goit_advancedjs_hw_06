function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log('--- Generic Task 1 ---');
    console.log(data);
});
export {};
//# sourceMappingURL=1.js.map