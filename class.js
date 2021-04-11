// disini adlaah pembuatan kelas dan methodnya.

const { SHA256 } = require("crypto-js");
const { json, response } = require("express");

class nonce {
  check_nonce(nim, nonce_1, nonce_2, nonce_3) {
    const myObject = {
      1301190061: {
        name: "Agus",
        hash_1: "apalah itu hash",
        hash_2: " awokasdokaoksd",
        hash_3: " akowdokskaodokasd",
      },
      1301190369: {
        name: "daffa",
        hash_1: "apalah itu hash",
        hash_2: " awokasdokaoksd",
        hash_3: " akowdokskaodokasd",
      },
    };

    let temp_1 = myObject[nim].hash_1;
    let temp_2 = myObject[nim].hash_2;
    let temp_3 = myObject[nim].hash_3;

    let concat_1 = temp_1.concat(nonce_1);
    let concat_2 = temp_2.concat(nonce_2);
    let concat_3 = temp_3.concat(nonce_3);

    let sha1 = SHA256(concat_1);
    let sha2 = SHA256(concat_2);
    let sha3 = SHA256(concat_3);

    let sub1 = sha1.substring(0, 1);
    let sub2 = sha2.substring(0, 2);
    let sub3 = sha3.substirng(0, 3);

    var status_1 = false;
    var status_2 = false;
    var status_3 = false;

    if (sub1 == "0") {
      status_1 = true;
    }

    if (sub2 == "00") {
      status_2 = true;
    }

    if (sub3 == "000") {
      status_3 = true;
    }

    if (status_1 == false || status_2 == false || status_3 == false) {
      let message =
        `IHHH DIKIT LAGI, SEMANGAT` + myObject[nim].name + `PASTI BISA LAH`;
    } else {
      let message =
        `MANTAP BENAR SEMUA!, SELAMAT SILAHKAN DIKUMPULKAN` +
        myObject[nim].name;
    }

    return response.json([
      (("status_nonce_1 " = status_1),
      ("status_nonce_2" = status_2),
      ("status_nonce_3" = status_3),
      ("message" = message)),
    ]);
  }
}

module.exports = nonce;
