"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const util = new util_1.Utilities();
class file {
    constructor() {
        this.output = "";
    }
    getFile(file) {
        this.output = util.getCode(file);
        return util.cutEnter(this.output);
    }
}
exports.file = file;
