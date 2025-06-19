import { describe, it, expect } from 'vitest';

const results = [];

Promise.resolve()
  .then(() => results.push(1));

setTimeout(() => results.push(2), 10);

queueMicrotask(() => {
  results.push(3);
  queueMicrotask(() => results.push(4));
});

results.push(5);

describe('queueMicrotask', () => {
  it('verify order of execution', async () => {
    await new Promise(resolve => setTimeout(resolve, 20));

    expect(results).toEqual([ ... ]);
  });
});