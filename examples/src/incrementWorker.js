// self.onmessage = function (e) {
//     const { sab, index, value } = e.data;
//     const sharedArray = new Int32Array(sab);

//       Atomics.add(sharedArray, index, value);

//     self.postMessage('done');
// };


self.onmessage = function (e) {
    const { sab, value, index } = e.data;
    const sharedArray = new Int32Array(sab);

    setTimeout(() => {
        sharedArray[index] += value;
        self.postMessage('done');
    }, Math.random() * 50);
};