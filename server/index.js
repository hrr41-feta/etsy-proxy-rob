const nr = require("newrelic");
const express = require("express");
const proxy = require("http-proxy-middleware");
const PORT = 3500;
app = express();

app.use(
  proxy("/api/checkout", {
    target: "http://ec2-52-15-159-32.us-east-2.compute.amazonaws.com:1234"
  })
);
// app.use(proxy("/products", { target: "http://localhost:3333" }));
// app.use(proxy("/api/seller", { target: "http://localhost:5000" }));
// app.use(proxy("/api/description", { target: "http://localhost:3000" }));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}:`);
});
