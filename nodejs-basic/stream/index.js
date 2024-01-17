const fs = require('fs');
const { createReadStream, createWriteStream } = require('fs');

const inputFilePath = './stream/input.txt';
const outputFilePath = './stream/output.txt';

// Membuat readable stream dari input.txt
const readableStream = createReadStream(inputFilePath, 'utf8');

// Membuat writable stream ke output.txt
const writableStream = createWriteStream(outputFilePath, 'utf8');

// Menyalin data dari readable stream ke writable stream
readableStream.pipe(writableStream);

// Mengatasi peristiwa saat selesai menulis
writableStream.on('finish', () => {
  console.log('Teks dari input.txt telah disalin ke output.txt.');
});

// Mengatasi kesalahan jika ada
readableStream.on('error', (err) => {
  console.error('Gagal membaca berkas input.txt:', err);
});

writableStream.on('error', (err) => {
  console.error('Gagal menulis ke berkas output.txt:', err);
});
