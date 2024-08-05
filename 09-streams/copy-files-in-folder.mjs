// How to run program: node copy-files-in-folder.mjs <source directory> <destination directory>
import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
    console.log(
        'Source and destination directories must be suplitted as arguments'
    );
    process.exit(0);
}

const sourceDir = process.argv[2];
const destinationDir = process.argv[3];

if (path.normalize(sourceDir) === path.normalize(destinationDir)) {
    console.warn('Source and destination directories must be different');
    process.exit(0);
}

if (!fs.existsSync(sourceDir)) {
    console.warn(`Source dir ${sourceDir} does't exist!`);
    process.exit(0);
}

if (fs.existsSync(destinationDir)) {
    fs.rmSync(destinationDir, { recursive: true, force: true });
}
fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (error, fileNames) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName);
        const destinationFilePath = path.join(destinationDir, fileName);

        const readFileStream = fs.createReadStream(sourceFilePath);
        const writeFileStream = fs.createWriteStream(destinationFilePath);

        readFileStream.pipe(writeFileStream);

        writeFileStream.on('finish', () => {
            console.log(`Finish ${fileName} was copied`);
        });
    });
});
