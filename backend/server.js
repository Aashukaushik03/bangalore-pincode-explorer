const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const PORT = 8000;

// Home Route
app.get("/", (req, res) => {
  res.send("Bangalore Pincode Explorer API Running");
});

// Search by Pincode
app.get("/pincode/:code", (req, res) => {
  const code = req.params.code;

  const result = data.find(item => item.pincode === code);

  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: "Pincode not found"
    });
  }
});

// Search by Area Name
app.get("/area/:name", (req, res) => {
  const areaName = req.params.name.toLowerCase();

  const result = data.find(item =>
    item.areas.some(area =>
      area.toLowerCase() === areaName
    )
  );

  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: "Area not found"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});