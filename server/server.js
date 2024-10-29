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
app.get("/test", (req, res) => {
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
