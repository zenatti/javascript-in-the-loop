import { describe, it, expect, vi } from 'vitest';
import { delayedCallback } from '../src/fnTimeout';

describe('delayedCallback', () => {
    it('calls the callback after timeout', () => {
        const callback = vi.fn();
        vi.useFakeTimers();

        delayedCallback(callback, 1000);

        // not already caller
        expect(callback).not.toHaveBeenCalled();

        // go ahead
        vi.advanceTimersByTime(1000);

        // now should have been called
        expect(callback).toHaveBeenCalledWith('done');

        vi.useRealTimers();
    });
});
