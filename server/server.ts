import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/getItems", (req: Request, res: Response) => {
  res.json({
    sale: ["black", "affogato", "mocha", "choco"],
    limited: ["black", "affogato", "mocha", "choco"],
    best: ["black", "affogato", "mocha", "choco"],
    allItems: [
      "black",
      "affogato",
      "mocha",
      "choco",
      "black",
      "affogato",
      "mocha",
      "choco",
      "black",
      "affogato",
      "mocha",
      "choco",
      "black",
      "affogato",
      "mocha",
      "choco",
    ],
  });
  console.log("Items request successful");
});

app.listen(3000, () => {
  console.log("Server running at PORT 3000");
});
