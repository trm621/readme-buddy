const fs = require('fs');
const path = require('path');

// Create a function to write README file, ensuring the `dist` directory exists
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        const outPath = path.join(__dirname, '..', 'dist', 'README.md');
        const outDir = path.dirname(outPath);

        try {
            fs.mkdirSync(outDir, { recursive: true });
        } catch (err) {
            // If mkdir fails for an unexpected reason, reject
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