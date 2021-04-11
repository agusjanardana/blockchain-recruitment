const express = require("express");
const app = express();
require("dotenv").config();

var http = require("http").createServer(app);

function isNonce() {
  var nonce = new Nonce();
  return nonce.check_nonce(nim, nonce_1, nonce_2, nonce_3);
}

const PORT = process.env.PORT;

app.use("/", isNonce, () => {
  return "API untuk rekruitasi Blockchain Datascience";
});

http.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});
