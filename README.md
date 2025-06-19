# javascript-in-the-loop

Un progetto di esempi e test per comprendere il funzionamento dell'**event loop** in JavaScript, l'uso di **Promise**, **Web Worker**, **SharedArrayBuffer** e altre API asincrone.

## Struttura del progetto

- `src/`  
  Codice sorgente degli esempi principali (funzioni asincrone, worker, ecc).
- `tests/`  
  Test automatici per il codice in `src/`.
- `examples/`  
  Esempi aggiuntivi e test duplicati per esplorazione e didattica.

## Requisiti

- Node.js v20+ (vedi [.nvmrc](.nvmrc))
- npm

## Installazione

```sh
npm ci
```

## Esecuzione dei test

```sh
npm run test
```

I test sono scritti con [Vitest](https://vitest.dev/).

## Esempi inclusi

- **fnAsync**: Promise, async/await, gestione errori.
- **fnTimeout**: Uso di `setTimeout`.
- **requestAnimationFrame**: Animazioni asincrone.
- **myWorker**: Calcolo del Fibonacci in un Web Worker.
- **incrementWorker**: Uso di SharedArrayBuffer.

## Note

- Alcuni test simulano l'ambiente dei Web Worker tramite uno script di setup.
- La cartella `examples/` contiene versioni alternative per esplorazione manuale.

---

Autore: Maicol Zenatti [zenatti.dev](https://zenatti.dev) 
Repo: [github.com/zenatti/javascript-in-the-loop](https://github.com/zenatti/javascript-in-the-loop)