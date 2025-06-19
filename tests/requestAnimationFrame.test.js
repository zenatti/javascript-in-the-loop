import { describe, it, expect } from 'vitest';
import { animateNTimes } from '../src/requestAnimationFrame';

describe('animateNTimes (requestAnimationFrame)', () => {
    it('should call the callback N times using requestAnimationFrame', async () => {
        const calls = [];
        const callback = () => {
            calls.push(performance.now());
        };

        animateNTimes(callback, 3);

        await new Promise((resolve) => setTimeout(resolve, 100));

        expect(calls.length).toBe(3);
    });
});
