exports.id = "main";
exports.modules = {

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst bodyParser = __importStar(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst config_1 = __webpack_require__(/*! ../config */ \"./config.ts\");\ndotenv.config();\nconst app = express_1.default();\nvar corsOptions = {\n    origin: \"http://localhost:8080\",\n};\n//app middleware\napp.use(helmet_1.default());\napp.use(cors_1.default(corsOptions));\n// parse requests of content-type - application/json and application/x-www-form-urlencoded\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: true }));\n// simple route\n// app.get(\"/\", (req, res) => {\n//   res.json({ message: \"A successful request.\" });\n// });\napp.get(\"/\", req, res);\n{\n    config_1.pool.query(\"SELECT * FROM books\", (error, results) => {\n        if (error) {\n            throw error;\n        }\n        response.status(200).json(results.rows);\n    });\n}\n;\nexports.default = app;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nconst PORT = parseInt(process.env.PORT, 10) || 8080;\n// set port, listen for requests\nconst server = app_1.default.listen(PORT, () => {\n    console.log(`Server is running on port ${PORT}.`);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};