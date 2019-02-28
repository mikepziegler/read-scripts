"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const util = new util_1.Utilities();
class js {
    getOLComments(file) {
        let output = util.getCode(file);
    }
    getComments(file) {
        let output = util.getCode(file);
    }
    getJsDoc(file) {
        let output = util.getCode(file);
        let comments = util.cutRegex(output, /\/\*\*\n( \*(.*?)*\n?)*( )*\*\//g);
        let JsDoc = util.pickJSDoc(comments);
        console.log(comments);
    }
    getInterface(file) {
        let output = util.getCode(file);
    }
    getClassname(file) {
        let output = util.getCode(file);
    }
    getFunctions(file) {
        let output = util.getCode(file);
    }
    getImports(file) {
        let output = util.getCode(file);
    }
    getExports(file) {
        let output = util.getCode(file);
    }
}
exports.js = js;
