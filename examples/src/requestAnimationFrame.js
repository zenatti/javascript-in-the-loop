export function animateNTimes(callback, times) {
    let count = 0;

    function step() {
        if (count < times) {
            callback();
            count++;
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}
