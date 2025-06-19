self.onmessage = (e) => {
    const n = e.data.n;
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    const result = fibonacci(n);
    self.postMessage({ result });
};