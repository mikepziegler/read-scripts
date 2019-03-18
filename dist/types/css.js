"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const file_1 = require("./file");
const util = new util_1.Utilities();
class css extends file_1.file {
    getIds(file) {
        this.output = util.getCode(file);
    }
    getClasses(file) {
        this.output = util.getCode(file);
    }
    getElements(file) {
        this.output = util.getCode(file);
    }
}
exports.css = css;
