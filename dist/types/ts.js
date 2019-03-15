"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("./js");
const util_1 = require("../util/util");
const util = new util_1.Utilities();
class ts extends js_1.js {
    getInterfaces(file) {
        this.output = util.getCode(file);
        return this.output;
    }
    getImports(file) {
        this.output = util.getCode(file);
        return this.output;
    }
}
exports.ts = ts;
