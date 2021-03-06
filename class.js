// disini adlaah pembuatan kelas dan methodnya.

const { SHA256 } = require("crypto-js");
const { json, response } = require("express");

// class nonce {
//   check_nonce(nim, nonce_1, nonce_2, nonce_3) {
//     const myObject = {
//       1301190061: {
//         name: "Agus",
//         hash_1:
//           "ebb6a95e9f04230dec346553e9c0e10bdc5e700c46bd2a05aa31c8192cb8c422",
//         hash_2:
//           " 7ec3646b7438861734b7ce82dadbc286f96099c42c7e91eba9a5f7985a71dbfd",
//         hash_3:
//           " 26f016adf9c6002b2abd901cc1621a38bf82feadf92a4568e04e94afbf09b9b2",
//       },
//       1301190369: {
//         name: "daffa",
//         hash_1: "apalah itu hash",
//         hash_2: " awokasdokaoksd",
//         hash_3: " akowdokskaodokasd",
//       },
//     };

//     if (!myObject[nim]) {
//       return {
//         status: error,
//         message: " nim tidak ditemukan",
//       };
//     }
//     let temp_1 = myObject[nim].hash_1;
//     let temp_2 = myObject[nim].hash_2;
//     let temp_3 = myObject[nim].hash_3;

//     let concat_1 = temp_1.concat(nonce_1);
//     let concat_2 = temp_2.concat(nonce_2);
//     let concat_3 = temp_3.concat(nonce_3);

//     let sha1 = SHA256(concat_1).toString();
//     let sha2 = SHA256(concat_2).toString();
//     let sha3 = SHA256(concat_3).toString();

//     let sub1 = sha1.substring(0, 1);

//     let sub2 = sha2.substring(0, 2);
//     let sub3 = sha3.substring(0, 3);

//     var status_1 = false;
//     var status_2 = false;
//     var status_3 = false;

//     if (sub1 == "0") {
//       status_1 = true;
//     }

//     if (sub2 == "00") {
//       status_2 = true;
//     }

//     if (sub3 == "000") {
//       status_3 = true;
//     }
//     var message = null;
//     if (status_1 == false || status_2 == false || status_3 == false) {
//       message =
//         `IHHH DIKIT LAGI, SEMANGAT` + myObject[nim].name + `PASTI BISA LAH`;
//     } else {
//       message =
//         `MANTAP BENAR SEMUA!, SELAMAT SILAHKAN DIKUMPULKAN` +
//         myObject[nim].name;
//     }
//     return {
//       status_nonce_1: status_1,
//       status_nonce_2: status_2,
//       status_nonce_3: status_3,
//       message: message,
//     };

//     // return response.json({
//     //   status_nonce_1: status_1,
//     //   status_nonce_2: status_2,
//     //   status_nonce_3: status_3,
//     //   message: message,
//     // });
//   }
// }

function check_nonce(nim, nonce_1, nonce_2, nonce_3) {
  const myObject = {
    1401180232: {
      name: "Willy",
      hash_1:
        "ebb6a95e9f04230dec346553e9c0e10bdc5e700c46bd2a05aa31c8192cb8c422",
      hash_2:
        "7ec3646b7438861734b7ce82dadbc286f96099c42c7e91eba9a5f7985a71dbfd",
      hash_3:
        "26f016adf9c6002b2abd901cc1621a38bf82feadf92a4568e04e94afbf09b9b2",
    },
    1301194105: {
      name: "Pramaishella Ardiani Regita Putri",
      hash_1:
        "688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6",
      hash_2:
        "f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b",
      hash_3:
        "f969fdbe811d8a66010d6f8973246763147a2a0914afc8087839e29b563a5af0",
    },
    1301190445: {
      name: "Muhammad Zaky Al Fatih",
      hash_1:
        "2fe840e13244a9d748883574c1f1b7b1d7020eb39d0735b8f91ef5cf6f35173e",
      hash_2:
        "7d3dddf8b2cce3ecf30ade03d3b641f0ff22461b2469156af9349f5cabfcd69b",
      hash_3:
        "a856d1b2d68c94c589734d54f201329c633716256b07b9e80b44b238630dd2bf",
    },
    1301180504: {
      name: "Deril Apririaldi Fasya",
      hash_1:
        "eeb6c56d6041455991bb1ce6781de704fa8bf0af89465ea33d2770fc62bde462",
      hash_2:
        "ceaa401ca0fe5630d9ede1d2ec365fc00848cd1f15336865284ffca18f6b228d",
      hash_3:
        "8a08da17cd7c7332a743636c907521df287fec7e152fcd4541833d1f76329050",
    },
  };

  if (!myObject[nim]) {
    return {
      status: "error",
      message: "nim tidak ditemukan",
    };
  }
  let temp_1 = myObject[nim].hash_1;
  let temp_2 = myObject[nim].hash_2;
  let temp_3 = myObject[nim].hash_3;

  let concat_1 = temp_1.concat(nonce_1);
  let concat_2 = temp_2.concat(nonce_2);
  let concat_3 = temp_3.concat(nonce_3);

  let sha1 = SHA256(concat_1).toString();
  let sha2 = SHA256(concat_2).toString();
  let sha3 = SHA256(concat_3).toString();
  console.log(sha1);

  let sub1 = sha1.substring(0, 1);
  let sub2 = sha2.substring(0, 2);
  let sub3 = sha3.substring(0, 3);

  var status_1 = false;
  var status_2 = false;
  var status_3 = false;
  if (sub1 == "1") {
    status_1 = true;
  }

  if (sub2 == "11") {
    status_2 = true;
  }

  if (sub3 == "111") {
    status_3 = true;
  }
  var message = null;
  var status = null;
  if (status_1 == false || status_2 == false || status_3 == false) {
    message =
      `IHHH DIKIT LAGI, SEMANGAT` +
      " " +
      myObject[nim].name +
      " " +
      `PASTI BISA LAH`;
    status = "failed";
  } else {
    message =
      `MANTAP BENAR SEMUA!, SELAMAT SILAHKAN DIKUMPULKAN` +
      " " +
      myObject[nim].name;
    status = "success";
  }
  return {
    status_nonce_1: status_1,
    status_nonce_2: status_2,
    status_nonce_3: status_3,
    message: message,
    status: status,
  };
}

module.exports = check_nonce;
