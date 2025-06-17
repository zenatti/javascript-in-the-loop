import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

globalThis.Worker = class {
    constructor(scriptUrl) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const workerPath = path.resolve(__dirname, scriptUrl);

        const filePath = pathToFileURL(workerPath);

        if (!fs.existsSync(filePath)) {
            throw new Error(`Worker file not found: ${filePath}`);
        }

        this.workerCode = fs.readFileSync(filePath, 'utf8');
        this.onmessage = null;

        this._workerContext = {
            postMessage: (msg) => {
                if (this.onmessage) this.onmessage({ data: msg });
            },
            onmessage: null,
        };

        const wrapper = new Function('self', this.workerCode);
        wrapper(this._workerContext);
    }

    postMessage(msg) {
        if (typeof this._workerContext.onmessage === 'function') {
            this._workerContext.onmessage({ data: msg });
        }
    }

    terminate() { }
};
