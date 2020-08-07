exports.id = "main";
exports.modules = {

/***/ "./config.ts":
false,

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (46:21)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     res.json({ message: \\\"A successful request.\\\" });\\n| });\\n> const getBooks = app.(request, response);\\n| {\\n|     config_1.pool.query(\\\"SELECT * FROM books\\\", (error, results) => {\");\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nconst PORT = parseInt(process.env.PORT, 10) || 8080;\n// set port, listen for requests\nconst server = app_1.default.listen(PORT, () => {\n    console.log(`Server is running on port ${PORT}.`);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "body-parser":
false,

/***/ "cors":
false,

/***/ "dotenv":
false,

/***/ "express":
false,

/***/ "helmet":
false,

/***/ "pg":
false

};