function getPromise<T>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise<(string | number)[]>()
  .then((data) => {
    console.log('--- Generic Task 1 ---');
    console.log(data);
  });

export {};