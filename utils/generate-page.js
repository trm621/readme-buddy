const fs = require('fs');
const path = require('path');

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        const outPath = path.join(__dirname, '..', 'dist', 'README.md');
        const outDir = path.dirname(outPath);

        try {
            fs.mkdirSync(outDir, { recursive: true });
        } catch (err) {
            return reject(err);
        }

        fs.writeFile(outPath, fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Check the ./dist folder for your README!'
            });
        });
    });
};

module.exports = writeToFile;