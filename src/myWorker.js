self.onmessage = (e) => {
    const n = e.data.n;
    
    function fibonacci(n) {
        return n;
    }

    const result = fibonacci(n);
    self.postMessage({ result });
};