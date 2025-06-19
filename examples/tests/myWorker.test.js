import { describe, it, expect } from 'vitest';

describe('myWorker', () => {
    it('computes fibonacci correctly', async () => {
        const worker = new Worker('../src/myWorker.js');

        const result = await new Promise((resolve) => {
            worker.onmessage = (e) => {
                resolve(e.data.result);
            };
            worker.postMessage({ n: 42 });
        });

        expect(result).toBe(267914296);
    }, 10000);
});