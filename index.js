const express = require("express");
const { get } = require("http");
const app = express();
require("dotenv").config();
const getNonce = require("./class");
var http = require("http").createServer(app);
const check_nonce = require("./class.js");

// function isNonce() {
//   nim = 1301190061;
//   nonce_1 = "aiosdjhosiadj2323";
//   nonce_2 = "aiosdjhosiadj2323";
//   nonce_3 = "aiosdjhosiadj2323";

//   return nonce.check_nonce(nim, nonce_1, nonce_2, nonce_3);
// }

const PORT = process.env.PORT;

// app.get("/", "/:nim", "/:nonce_1", "/:nonce_2", "/:nonce_3", (req,res) => {
//   nim = req.params.nim;
//   nonce_1 = req.params.nonce_1;
//   nonce_2 = req.params.nonce_2;
//   nonce_3 = req.params.nonce_3;
//   nonce.check_nonce(nim, nonce_1, nonce_2, nonce_3);
//   return "API untuk rekruitasi Blockchain Datascience";
// });

app.post("/sendhash", (req, res) => {
  const nim = req.query.nim;
  const nonce_1 = req.query.nonce_1;
  const nonce_2 = req.query.nonce_2;
  const nonce_3 = req.query.nonce_3;
  if (!nim || !nonce_1 || !nonce_2 || !nonce_3) {
    res.status(400).json({
      status: "error",
      message: "missing query params",
    });

    return;
  }
  const hasil = check_nonce(nim, nonce_1, nonce_2, nonce_3);

  if (hasil.status === "error") {
    res.status(400).json({
      status: "error",
      message: hasil.message,
    });
    return;
  }
  return res.status(200).json(hasil);
});

http.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});
