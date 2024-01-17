// TODO 1: Impor variabel EventEmitter dari core module events
const EventEmitter = require('events');

// TODO 2: Buat variabel myEmitter yang merupakan instance dari EventEmitter
const myEmitter = new EventEmitter();

// TODO 3: Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

myEmitter.on('birthday', birthdayEventListener);

// TODO 4: Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda
myEmitter.emit('birthday', 'Wirdaa'); // Gantilah 'NamaAnda' dengan nama Anda
