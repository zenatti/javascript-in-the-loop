export function delayedCallback(callback, delay = 500) {
    setTimeout(() => {
        callback('done');
    }, delay);
}
