import express, { Request, Response } from "express";

const app = express();

app.get("/test", (req: Request, res: Response) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
  console.log("Test request success");
});

app.listen(3000, () => {
  console.log("Server running at PORT 3000");
});
