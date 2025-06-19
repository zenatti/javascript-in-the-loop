import { describe, it, expect } from 'vitest';

describe('SharedArrayBuffer with two workers', async () => {
    it('should increment the same value concurrently', async () => {
        const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
        const sharedArray = new Int32Array(sab);
        const index = 0;

        const runWorker = (value) => {
            return new Promise((resolve) => {
                const worker = new Worker('../src/incrementWorker.js', { type: 'module' });
                worker.onmessage = () => resolve();
                worker.postMessage({ sab, index, value });
            });
        };

        await Promise.all([
            runWorker(10),
            runWorker(20),
            runWorker(30)
        ]);

        expect(sharedArray[0]).toBe(60);
    });
});