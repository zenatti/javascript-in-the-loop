import { describe, it, expect, vi } from 'vitest';

describe('eventLoop', () => {
    it('resolves functions in correct order', async () => {
        vi.useFakeTimers();
        const result = [];

        const fnA = () => {
            return new Promise((resolve) => {
                result.push("fnA");
                resolve();
            });
        };

        const fnB = () => {
            setTimeout(() => {
                result.push("fnB");
            }, 1);
        };

        const fnC = () => {
            setTimeout(() => {
                result.push("fnC");
            }, 0);
        };

        const fnD = async () => {
            result.push("fnD");
        };

        const fnE = async () => {
            result.push("fnE-1");
            setTimeout(() => {
                result.push("fnE-2");
            }, 0);
        };

        const fnF = () => {
            return new Promise((resolve) =>
                setTimeout(() => {
                    result.push("fnF");
                    resolve();
                }, 100)
            );
        };

        fnA();
        fnB();
        fnC();
        fnD();
        fnE();
        fnF();

        vi.runAllTimers();

        expect(result).toEqual([
            'fnA',
            'fnD',
            'fnE-1',
            'fnC',
            'fnE-2',
            'fnB',
            'fnF',
        ]);

        vi.useRealTimers();
    });
});
