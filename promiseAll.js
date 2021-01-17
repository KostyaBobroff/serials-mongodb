

const promiseAll = (promises) =>  {
  return new Promise((resolve, reject) => {
    const results = [];

    promises.forEach((promise, id) => {
      promise.then((data) => results[id] = 
        data
      ).then(() => {
        if (results.filter(item => item).length === promises.length ) {
          resolve(results)
          return;
        }
      },
      ).catch(error => reject(error));
    })
   
  })
};

const generatePromise = (data, time, isError = false) => new Promise((resolve, reject) => {
 const controlFunction = isError ? reject : resolve;

 setTimeout(() => {
  controlFunction(data)
 }, time)
})

const promise1 = generatePromise(1, 1000)
const promise2 = generatePromise(2, 2000)
const promise3 = generatePromise(4, 100)

promiseAll([promise1,promise2,promise3]).then(console.log)
