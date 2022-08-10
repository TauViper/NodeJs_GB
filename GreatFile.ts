import fs from 'fs';

const createEmptyFileOfSize = (fileName: string) => {
  return new Promise((resolve, reject) => {
    const fh = fs.openSync(fileName, 'w');
    resolve(true);
  });
};

createEmptyFileOfSize('./1.txt');

let ip =
  Math.floor(Math.random() * 255) +
  1 +
  '.' +
  Math.floor(Math.random() * 255) +
  '.' +
  Math.floor(Math.random() * 255) +
  '.' +
  Math.floor(Math.random() * 255);
const arr = [`${ip}`];
for (const item of arr) {
  console.log(ip + '\n');
}

// for (const item of arr) {
//   await createEmptyFileOfSize(item + '\n');
// }

//   // const max = 1024 * 1024 * 10;
//   fs.stat('./1.txt', (err, stats) => {
//     if (err == null) {
//       fs.lstatSync('./1.txt').size <= 104857600
//         ? ipLogGen()
//         : console.log('Файл 100мб');
//     } else if (err.code === 'ENOENT') {
//       ipLogGen();
//     } else {
//       console.log('Some other error: ', err.code);
//     }
//   });
// };
// generateFile();

// fs.appendFile("example_file.txt", "World", (err) => {
//     if (err) {
//       console.log(err);
//     }

//     var fs = require("fs"); // Load the filesystem module
// var stats = fs.statSync("myfile.txt")

// // Convert the file size to megabytes (optional)
// var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
