"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bookStreo_routes_1 = require("./app/modules/bookShop/bookStreo.routes");
const app = (0, express_1.default)();
//parsers
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//application routes
app.use('/api', bookStreo_routes_1.bookRoutes);
app.get('/', (req, res) => {
    res.send('Hello, Vercel!');
});
exports.default = app;
