"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const uri = "mongodb+srv://root:BP9Y7Jka77b20XTn@cluster0.z6r3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            yield client.connect();
            // Send a ping to confirm a successful connection
            yield client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }
        catch (error) {
            console.log("Error connecting to mongoDB");
            yield client.close();
        }
    });
}
run().catch(console.dir);
app.get("/getItems", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const database = client.db("ComfyCafe");
        const collection = database.collection("products");
        const allItems = yield collection.find({ availability: "true" }).toArray();
        const sale = allItems.filter((item) => item.specialty === "sale");
        const limited = allItems.filter((item) => item.specialty === "limited");
        const best = allItems.filter((item) => item.specialty === "best");
        res.status(200).json({
            sale: sale,
            limited: limited,
            best: best,
            allItems: allItems,
        });
        console.log("getItems request success");
    }
    catch (error) {
        console.log("Error fetching data: " + error);
        res.status(500).json({ message: "Error fetching data" });
    }
}));
app.listen(3000, () => {
    console.log("Server running at PORT 3000");
});
