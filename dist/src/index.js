"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = parseInt(process.env.PORT, 10) || 8080;
// set port, listen for requests
const server = app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
