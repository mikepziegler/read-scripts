"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const util = new util_1.Utilities();
class js {
    getOneLineC(file) {
        let output = util.getCode(file);
        let comments = util.cutRegex(output, /\/{2}(.*)/g);
        return comments;
    }
    getComments(file) {
        let output = util.getCode(file);
        let comments = util.cutRegex(output, /\/\*\n(.*?\n)*( )?\*\/\n/g);
    }
    getJsDoc(file) {
        let result = [];
        let output = util.getCode(file);
        let comments = util.cutRegex(output, /\/\*\*\n( \*(.*?)*\n?)*( )*\*\//g);
        let JsDoc = util.pickJSDoc(comments);
        JsDoc.forEach((e) => {
            util.joinParts(e);
        });
        return JsDoc;
    }
    getClassname(file) {
        let output = util.getCode(file);
    }
    getFunctions(file) {
        let output = util.getCode(file);
    }
    getRequire(file) {
        let output = util.getCode(file);
    }
    getExports(file) {
        let output = util.getCode(file);
    }
}
exports.js = js;
