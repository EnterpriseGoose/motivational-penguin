const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("static"));

app.get("/api", () => {
  res.set("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      country: "US",
      state: "NJ",
      city: "Chatham",
      slack_id: "U07BN55GN3D",
      extra: "penguins are the best",
    })
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
