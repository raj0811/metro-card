const fs = require("fs");
const process = require("process");
const path = require("path");

const filename = process.argv[2];
const inputFilePath = path.join(__dirname, "sample_input", filename);

fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var inputLines = data.toString().split("\n");

  // Add your code here to process input commands
  const metroCard = [];

  //   Fill input entries in the array
  inputLines.forEach((data, index) => {
    const result = data.toString().split(" ");
    if (result[0] === "BALANCE") {
      let card = {
        id: index + 1,
        balance: result[2],
        type: "dfsdfs",
        cardId: result[1],
        CheckInCount: 0,
      };
      metroCard.push(card);
    } else if (result[0] === "CHECK_IN") {
      metroCard.map((data) => {
        if (data.cardId === result[1]) {
          data.type = result[2];
        }
      });
    }
  });
  console.log(metroCard)
});