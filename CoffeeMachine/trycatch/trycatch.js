// // try {
// //     console.log("Awal blok try");
// //     console.log("Akhir blok try");
// //   } catch (error) {
// //     console.log("Tidak terjadi eror, maka kode ini diabaikan");
// //   }


// // try {
// //     console.log("Awal blok try");   // (1)
// //     errorCode;                      // (2)
// //     console.log("Akhir blok try");  // (3)
// //   } catch (error) {
// //     console.log("Terjadi error!");  // (4)
// //   }


// // try {
// //     console.log("Awal blok try");   // (1)
// //     errorCode;                      // (2)
// //     console.log("Akhir blok try");  // (3)
// //   } catch (error) {
// //     console.log(error.name);
// //     console.log(error.message);
// //     console.log(error.stack);
// //   }

// try {
//   console.log("Awal blok try");
//   console.log("Akhir blok try");
// } catch (error) {
//   console.log("Baris ini diabaikan");
// } finally {
//   console.log("Akan tetap dieksekusi");
// }

// const json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
 
const json = '{ "name" : "","age": 30 }';
 
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }
  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}