export async function fetchData() {
    return await new Promise((resolve) =>
        setTimeout(() => resolve('data loaded'), 100)
    );
}

export async function fetchDataWithError() {
    return await new Promise((_, reject) =>
        setTimeout(() => reject(new Error('fetch failed')), 100)
    );
}

export async function fetchMultipleData() {
    const promises = [
        new Promise((resolve) => setTimeout(() => resolve('data 1'), 100)),
        new Promise((resolve) => setTimeout(() => resolve('data 2'), 150)),
        new Promise((resolve) => setTimeout(() => resolve('data 3'), 50)),
    ];

    const results = await Promise.all(promises);
    return results; // ["data 1", "data 2", "data 3"]
}

export async function fetchMultipleDataWithError() {
    const promises = [
        new Promise((resolve) => setTimeout(() => resolve('data 1'), 100)),
        new Promise((_, reject) => setTimeout(() => reject(new Error('error on data 2')), 120)),
        new Promise((resolve) => setTimeout(() => resolve('data 3'), 80)),
    ];

    return await Promise.all(promises); // questa fallisce
}

export async function fetchMultipleDataSettled() {
    const promises = [
        new Promise((resolve) => setTimeout(() => resolve('data 1'), 100)),
        new Promise((_, reject) => setTimeout(() => reject(new Error('error on data 2')), 120)),
        new Promise((resolve) => setTimeout(() => resolve('data 3'), 80)),
    ];
    /*
        [
          { status: 'fulfilled', value: 'data 1' },
          { status: 'rejected', reason: Error: error on data 2 },
          { status: 'fulfilled', value: 'data 3' }
        ]
        */

    const results = await Promise.allSettled(promises);
    return results;
}
