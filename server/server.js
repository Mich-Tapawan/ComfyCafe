"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/hotItems", (req, res) => {
    res.json({
        sale: ["black", "affogato", "mocha", "choco"],
        limited: ["black", "affogato", "mocha", "choco"],
        best: ["black", "affogato", "mocha", "choco"],
    });
    console.log("hot items request successful");
});
app.get("/productList", (req, res) => {
    res.json({
        products: [
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
    console.log("hot items request successful");
});
app.listen(3000, () => {
    console.log("Server running at PORT 3000");
});
