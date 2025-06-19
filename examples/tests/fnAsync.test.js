import { describe, it, expect } from 'vitest';
import { fetchData, fetchDataWithError, fetchMultipleData, fetchMultipleDataSettled, fetchMultipleDataWithError } from '../src/fnAsync';

describe('fetchData', () => {
  it('resolves with "data loaded"', async () => {
    const result = await fetchData();
    expect(result).toBe('data loaded');
  });
});

describe('fetchDataWithError', () => {
  it('rejects with an error', async () => {
    await expect(fetchDataWithError()).rejects.toThrow('fetch failed');
  });
});

describe('fetchMultipleData', () => {
  it('resolves all promises', async () => {
    const result = await fetchMultipleData();
    expect(result).toEqual(['data 1', 'data 2', 'data 3']);
  });
});

describe('fetchMultipleDataWithError', () => {
  it('rejects if one promise fails', async () => {
    await expect(fetchMultipleDataWithError()).rejects.toThrow('error on data 2');
  });
});

describe('fetchMultipleDataSettled', () => {
  it('returns all results with statuses', async () => {
    const results = await fetchMultipleDataSettled();

    expect(results).toHaveLength(3);

    expect(results[0]).toEqual({ status: 'fulfilled', value: 'data 1' });
    expect(results[1].status).toBe('rejected');
    expect(results[1].reason).toBeInstanceOf(Error);
    expect(results[1].reason.message).toBe('error on data 2');
    expect(results[2]).toEqual({ status: 'fulfilled', value: 'data 3' });
  });
});