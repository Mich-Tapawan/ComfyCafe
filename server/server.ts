import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.json({
    sale: ["black", "affogato", "mocha", "choco"],
    limited: ["black", "affogato", "mocha", "choco"],
    best: ["black", "affogato", "mocha", "choco"],
  });
  console.log("Test request success");
});

app.listen(3000, () => {
  console.log("Server running at PORT 3000");
});
